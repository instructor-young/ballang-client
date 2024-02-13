import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationClearItemInCart() {
  const queryClient = useQueryClient();
  const mutationFn = api.cart.clearItemInCart;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["cart"] }),
  });
}
