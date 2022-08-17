import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.baseBg1};
  `}
`;

export const EntitiesEditContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 6.25rem);
    margin-top: 4.75rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    color: ${theme.colors.textColor};

    h2 {
      margin: 2.125rem 0;
      margin-left: 1.5rem;
    }
  `}
`;

export const EntitiesEditCategoriesSelector = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;
    border-bottom: 1px solid ${theme.colors.baseLine};
    padding: 0 1.5rem;
    box-sizing: border-box;
  `}
`;

export const EntitiesEditCategoriesButton = styled.button<ActiveButtonProps>`
  ${({ theme, active }) => css`
    height: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.textLight};
    margin-right: 1.5rem;
    cursor: pointer;

    :hover {
      color: ${theme.colors.textColor};
    }

    ${active &&
    css`
      color: ${theme.colors.primaryColor};
      border-bottom: 1px solid ${theme.colors.primaryColor};
    `}
  `}
`;

export const EntitiesEditList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100% - 16.25rem);
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    box-sizing: border-box;
    gap: 1.5rem;
    overflow-y: scroll;
  `}
`;

export const AddEntityCard = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px dashed ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primaryColor};
    cursor: pointer;
  `}
`;

export const ConfirmationContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 7.5rem;
    padding-left: 1.5rem;
    padding-top: 3.125rem;
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
  `}
`;
