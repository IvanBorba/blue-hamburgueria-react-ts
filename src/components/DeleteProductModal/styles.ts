import styled, { css } from "styled-components";

export const DeleteModalContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 15vh;
    border-radius: 8px;
    background-color: ${theme.colors.baseBg2};
    padding: 2rem;
    text-align: center;
    color: ${theme.colors.textColor};
    gap: 3rem;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}
`;
