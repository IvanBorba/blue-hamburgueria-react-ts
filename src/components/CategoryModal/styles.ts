import styled, { css } from "styled-components";

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.baseBg2};
    padding: 1.5rem;
    width: 25rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: ${theme.colors.textColor};
    border-radius: 8px;
  `}
`;
