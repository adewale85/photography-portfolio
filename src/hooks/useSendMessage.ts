
import axiosInstance from '@/utils/axiosInstance';
import { useMutation } from '@tanstack/react-query'


function useSendMessage() {
  return useMutation({
    mutationFn: async (formData: { name: string; email: string; message: string }) => {
      const response = await axiosInstance.post('/contact', formData);
      return response.data;
    },

    onSuccess: (data) => {
        console.log("Email sent successfully via Resend!", data);
    },
    onError: (error) => {
        console.error("Error sending email via Resend:", error);
    }
  });
}



export default useSendMessage