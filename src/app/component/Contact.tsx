"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  // 1. Existing State Variables
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // 2. NEW: State variable to track the visibility of the success pop-up modal
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      // Your existing Axios or fetch action logic here...
      // await axios.post("/api/contact", formData);
      
      setIsSuccess(true);
      setShowPopup(true); // 3. Open the premium pop-up modal upon successful save
      setFormData({ name: "", email: "", message: "" }); // Clean out the input boxes
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="Wrapper relative w-full flex flex-col lg:flex-row gap-12">
      
      {/* LEFT SIDE TEXT */}
      <div className="lg:w-1/2">
        <h2 className="font-glinter text-[50px] lg:text-[75px] text-[#D0B8AC] leading-tight mb-8">
          Let's Create <br /> Something Great
        </h2>
        <p className="text-gray-400 font-open text-base lg:text-lg mb-12 max-w-sm leading-relaxed">
          I am available for bookings and collaborations. Send a message and I will get back to you shortly.
        </p>
        
        <div className="space-y-4">
          <p className="text-[#D0B8AC] font-open uppercase tracking-widest text-xs font-bold">Follow Me</p>
          <div className="flex gap-6 font-open text-sm">
             <a href="https://www.instagram.com/Shollystarphotography" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#D0B8AC] transition-colors duration-300">Instagram</a>
             <a href="https://facebook.com/odusola.adewale" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#D0B8AC] transition-colors duration-300">Facebook</a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE INPUT BOXES */}
      <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-[500px]">
          
          <div className="flex flex-col space-y-2">
            <input 
              type="text" 
              placeholder="Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-white text-black placeholder:text-zinc-600 border border-zinc-800 focus:border-[#D0B8AC] focus:ring-1 focus:ring-[#D0B8AC] outline-none rounded-lg px-5 py-4 uppercase text-xs tracking-widest font-open transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-white text-black placeholder:text-zinc-600 border border-zinc-800 focus:border-[#D0B8AC] focus:ring-1 focus:ring-[#D0B8AC] outline-none rounded-lg px-5 py-4 uppercase text-xs tracking-widest font-open transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <textarea 
              placeholder="Tell me about your project" 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white text-black placeholder:text-zinc-600 border border-zinc-800 focus:border-[#D0B8AC] focus:ring-1 focus:ring-[#D0B8AC] outline-none rounded-lg px-5 py-4 uppercase text-xs tracking-widest font-open resize-none min-h-[120px] transition-all duration-300"
              required
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isPending} 
              className="group inline-flex items-center justify-center gap-4 bg-[#D0B8AC] hover:bg-white text-black font-open font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none w-full sm:w-auto text-center cursor-pointer"
            >
              <span>
                {isPending ? "Sending..." : "Send Message"}
              </span>
              <div className="transition-transform duration-300 ease-out group-hover:translate-x-2 shrink-0">
                <Image 
                  src="/images/Right_Arrow.svg" 
                  alt="Arrow" 
                  width={20} 
                  height={10} 
                  className="w-auto h-auto min-w-[20px]" 
                />
              </div>
            </button> 
          </div>
        </form>
      </div>

      {/* SUCCESS MODAL POP-UP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-zinc-900 border border-zinc-800 max-w-md w-full p-8 rounded-2xl text-center shadow-2xl relative transform transition-all scale-100 duration-300">
            
            {/* Elegant Checkmark Graphics */}
            <div className="w-16 h-16 bg-[#D0B8AC]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#D0B8AC]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h3 className="font-glinter text-3xl text-white mb-2 tracking-wide">
              Thank You
            </h3>
            
            <p className="text-zinc-400 font-open text-sm leading-relaxed mb-6">
              Your message was delivered safely. I appreciate you reaching out and will respond to your project request shortly!
            </p>

            {/* Close Button Action */}
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#D0B8AC] hover:bg-white text-black font-open font-bold text-xs uppercase tracking-widest py-4 rounded-full transition-all duration-300 shadow-md active:scale-98"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

    </div>
  );
}