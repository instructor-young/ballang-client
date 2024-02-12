import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: api.cart.getCart,
  });
}
