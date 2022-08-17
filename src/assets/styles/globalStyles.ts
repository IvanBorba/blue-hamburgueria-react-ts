import styled, { css } from "styled-components";

interface StyledInputProps {
  inputSize?: "small" | "large";
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, inputSize }) => css`
    all: unset;
    padding: 0 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    min-height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};

    ${inputSize === "small" &&
    css`
      width: 10.75rem;
    `}

    ${inputSize === "large" &&
    css`
      width: 22.375rem;
    `}
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: red;
    align-self: center;
    font-size: small;
    height: 2rem;
    padding: 0 2rem;
    text-align: center;
  `}
`;

export const ModalOverlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
