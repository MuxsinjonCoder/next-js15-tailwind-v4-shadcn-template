import request from "@/config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetById = <T>(endpoint: string, id: string | number) => {
  return useQuery<T>({
    queryKey: [endpoint, id],
    queryFn: async () => {
      if (!id) throw new Error("ID kerak");
      const response = await request.get(`${endpoint}?id=${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
