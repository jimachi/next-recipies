import styled from "styled-components";

const StyledButton = styled.button`
  width: 320px;
  height: 150px;
  border: 1px solid red;
  border-radius: 4px;
`;

type ButtonProps = {
  theme?: any;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
};

export default function Button({
  theme = "none",
  size = "medium",
  label,
  ...props
}: ButtonProps) {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
}
