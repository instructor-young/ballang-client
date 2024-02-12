import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  const id = useId();

  return (
    <div className="grid gap-y-1.5 w-full">
      <label htmlFor={id} className="text-sm font-medium text-gray-800">
        {label}
      </label>
      <input
        id={id}
        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
        {...props}
      />
    </div>
  );
}

export default Input;
