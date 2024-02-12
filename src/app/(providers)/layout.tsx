import { AuthProvider } from "@/contexts/auth.context";
import { ReactQueryProvider } from "@/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
