import { PropsWithChildren } from "react";

interface PageProps {
  fullWidth?: boolean;
}

function Page({ children, fullWidth }: PropsWithChildren<PageProps>) {
  return (
    <main
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none"
      data-full-width={fullWidth}
    >
      {children}
    </main>
  );
}

export default Page;
