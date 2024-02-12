import { ComponentProps, PropsWithChildren } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  color?: "white" | "black";
}

function Button({
  color = "white",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
      data-color={color}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
