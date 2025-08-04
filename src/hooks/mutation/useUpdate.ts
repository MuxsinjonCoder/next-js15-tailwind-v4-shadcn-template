import request from "@/config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdate = <TData, TVariables>(endpoint: readonly unknown[]) => {
  const queryClient = useQueryClient();

  return useMutation<TData, Error, { id: string | number; data: TVariables }>({
    mutationFn: ({ id, data }) =>
      request.put<TData>(`${endpoint}/${id}`, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: endpoint,
      });
    },
    onError: (error) => {
      console.error("Error useUpdate:", error);
    },
  });
};
