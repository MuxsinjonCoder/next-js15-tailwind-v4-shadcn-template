import request from "@/config/request";
import { useQuery } from "@tanstack/react-query";

interface UseGetListProps {
  endpoint: string;
  params?: Record<string, any>;
  enebled?: boolean;
}

export const useGetList = <T>({
  endpoint,
  params = {},
  enebled = true,
}: UseGetListProps) => {
  return useQuery<T, Error>({
    queryKey: [endpoint, params],
    queryFn: async () => {
      const response = await request.get(endpoint, { params });
      return response.data;
    },
    enabled: enebled,
  });
};
