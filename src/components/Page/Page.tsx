import { PropsWithChildren } from "react";

interface PageProps {
  fullWidth?: boolean;
}

function Page({ children, fullWidth }: PropsWithChildren<PageProps>) {
  return (
    <main
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[fullWidth=true]:max-w-none"
      data-fullWidth={fullWidth}
    >
      {children}
    </main>
  );
}

export default Page;
