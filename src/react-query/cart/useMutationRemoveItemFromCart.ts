import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationRemoveItemFromCart() {
  const queryClient = useQueryClient();
  const mutationFn = api.cart.removeItemFromCart;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["cart"] }),
  });
}
