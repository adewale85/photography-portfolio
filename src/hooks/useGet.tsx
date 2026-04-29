
import { Root } from '@/Constant/price';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

export function useGet() {
  const getData = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // 1. Tell Axios the response is the 'Root' interface
      const res = await axios.get<Root>("https://dummyjson.com/products");
      
      // 2. Return ONLY the products array
      return res.data.products; 
    }
  });

  return {
    // 3. getData.data is now the ProductDetails[] array
    Products: getData?.data || [], 
    status: getData?.status,
    error: getData?.error
  };
}