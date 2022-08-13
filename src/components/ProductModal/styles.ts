import styled, { css } from "styled-components";

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

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;
