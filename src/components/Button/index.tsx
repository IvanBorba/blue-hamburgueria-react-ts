import { StyledButton } from "./styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: "disabled" | "cancel" | false;
  size?: "small" | "large" | false;
}

const Button = ({
  text,
  onClick,
  variant = false,
  size = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {text}
    </StyledButton>
  );
};

export default Button;
