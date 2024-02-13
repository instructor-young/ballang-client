import { AuthProvider } from "@/contexts/auth.context";
import { ModalProvider } from "@/contexts/modal.context";
import { ReactQueryProvider } from "@/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
