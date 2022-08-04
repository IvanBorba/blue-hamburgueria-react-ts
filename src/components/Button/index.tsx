import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "disabled" | "cancel";
  size?: "small" | "large" | "x-large";
}

const Button = ({ text, variant, size, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props} variant={variant} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;
