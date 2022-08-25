import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsNavigationContainer = styled.div`
  ${({ theme }) => css`
    min-width: 19.188rem;
    height: 100vh;
    padding: 1.5rem;
    box-sizing: border-box;
    color: ${theme.colors.textColor};
    margin-left: 6.5rem;
  `}
`;

export const SettingsNavigationButtonsList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 3rem);
    background-color: ${theme.colors.baseBg2};
    margin: 1.5rem 0;
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const SettingsNavigationButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 5.5rem;
    padding: 1.5rem 0;
    padding-left: 3rem;
    box-sizing: border-box;
    cursor: pointer;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: ${theme.colors.textLight};
    }

    ${active &&
    css`
      background-color: ${theme.colors.primaryColorOpacity};
    `}
  `}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    position: relative;

    svg {
      position: absolute;
      left: -1.4rem;
    }

    ${active &&
    css`
      border-right: 2px solid ${theme.colors.primaryColor};
      box-sizing: border-box;
      svg {
        color: ${theme.colors.primaryColor};
      }
    `}
  `}
`;
