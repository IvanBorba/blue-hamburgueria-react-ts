import styled, { css } from "styled-components";

export const ModalContainer = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 8px;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;

export const Select = styled.select`
  ${({ theme }) => css`
    all: unset;
    padding: 0.8rem 1rem;
    box-sizing: border-box;
    width: 18.625rem;
    height: 3rem;
    background-color: ${theme.colors.baseBg1};
    border: 1px solid ${theme.colors.baseLine};
    border-radius: 8px;
    color: ${theme.colors.textColor};
  `}
`;
