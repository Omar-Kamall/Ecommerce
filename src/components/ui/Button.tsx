import { IButton } from "@/src/interfaces";

const Button = ({ children, className, ...rest }: IButton) => {
  return (
    <button className={`${className} cursor-pointer`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
