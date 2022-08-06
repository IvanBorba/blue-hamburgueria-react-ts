import styled, { css } from "styled-components";

export const SettingsProductCardContainer = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.textColor};
    text-align: center;

    img {
      width: 10.25rem;
    }

    p {
      color: ${theme.colors.textLight};
    }
  `}
`;

export const SettingsProductCardButton = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    width: 100%;
    border-radius: 0px 0px 8px 8px;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;
