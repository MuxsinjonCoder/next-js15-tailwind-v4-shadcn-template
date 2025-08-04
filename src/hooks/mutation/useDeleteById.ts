import request from "@/config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteById = (endpoint: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      request.delete(`${endpoint}/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [endpoint] });
    },
    onError: (error) => {
      console.error("Xato:", error);
    },
  });
};
