"use client";

import React, { useState } from "react";
import { supabase } from "@/utils/superbase";
import Image from "next/image";

export default function SubmitForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Save to Supabase (Database)
    const { error: superbaseError } = await supabase
      .from("Contact")
      .insert([
        { 
          name: formData.name, 
          email: formData.email, 
          message: formData.message 
        }
      ]);

    // Only stop if there IS an error
    if (superbaseError) {
      setLoading(false);
      alert("Error saving to database: " + superbaseError.message);
      return;
    }

    // 2. Send to Gmail via our API route
    try {
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      if (emailResponse.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        console.error("Email failed, but data saved in Supabase.");
        setSuccess(true); // Still show success since it's in your DB
      }
    } catch (error) {
      console.error("Network error: ", error);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="Wrapper lg:px-0 px-4 py-24 bg-black">
      <div className="flex flex-col lg:flex-row gap-20">
        
        <div className="lg:w-1/2">
          <h2 className="font-glinter text-[50px] lg:text-[75px] text-[#D0B8AC] leading-tight mb-8">
            Let's Create <br /> Something Great
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-sm">
            I am available for bookings and collaborations. Send a message and I will get back to you shortly.
          </p>
          
          <div className="space-y-4">
            <p className="text-[#D0B8AC] font-open uppercase tracking-widest text-sm">Follow Me</p>
            <div className="flex gap-6">
               <a href="https://www.instagram.com/Shollystarphotography" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">Instagram</a>
               <a href="https://facebook.com/odusola.adewale" target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">Facebook</a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative border-b border-white/20 focus-within:border-[#D0B8AC] transition-colors">
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-gray-600 uppercase text-xs tracking-widest"
                required
              />
            </div>

            <div className="relative border-b border-white/20 focus-within:border-[#D0B8AC] transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-gray-600 uppercase text-xs tracking-widest"
                required
              />
            </div>

            <div className="relative border-b border-white/20 focus-within:border-[#D0B8AC] transition-colors">
              <textarea 
                placeholder="Tell me about your project" 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-gray-600 uppercase text-xs tracking-widest resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="flex items-center gap-4 group cursor-pointer disabled:opacity-50"
            >
              <span className="text-[#D0B8AC] uppercase tracking-[0.3em] text-xs font-bold group-hover:underline">
                {loading ? "Sending..." : success ? "Message Sent!" : "Send Message"}
              </span>
              <div className="transition-transform duration-300 group-hover:translate-x-2">
                <Image src="/images/Right_Arrow.svg" alt="Arrow" width={24} height={12} />
              </div>
            </button> 
          </form>
        </div>
      </div>
    </section>
  );
}