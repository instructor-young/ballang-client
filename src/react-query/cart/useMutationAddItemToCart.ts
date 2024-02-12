import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationAddItemToCart() {
  const queryClient = useQueryClient();
  const mutationFn = api.cart.addItemToCart;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["cart"] }),
  });
}
