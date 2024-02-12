import React from "react";

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold text-3xl text-center my-12">{children}</h2>;
}

export default Heading;
