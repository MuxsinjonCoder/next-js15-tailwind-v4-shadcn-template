import request from "@/config/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreate = <TData, TVariables>(
  endpoint: string,
  queryKey: readonly unknown[]
) => {
  const queryClient = useQueryClient();

  return useMutation<TData, Error, TVariables>({
    mutationFn: (data: TVariables) =>
      request.post<TData>(endpoint, data).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey,
      });
    },
    onError: (error) => {
      console.error("Yaratishda xato yuz berdi:", error);
    },
  });
};
