import { IInput } from "@/src/interfaces";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ placeholder, className , ...rest}: IInput, ref) => {
    return (
      <input
        placeholder={placeholder}
        className={className}
        ref={ref}
        {...rest}
      />
    );
  },
);

// set display name for better debugging => warining
Input.displayName = "Input";

export default Input;
