import styled, { css } from "styled-components";

export const OrderDetailsContainer = styled.aside`
  ${({ theme }) => css`
    width: 25.875rem;
    height: 100vh;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px 0 0 16px;
    padding: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `}
`;

export const OrderDetailsHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
      font-family: ${theme.constants.bodyFontFamily};
      line-height: ${theme.constants.lineHeight};
      font-size: ${theme.constants.headingFontSize};
      letter-spacing: 140%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
    }
  `}
`;

export const CheckoutDetailsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const CheckoutDetailsHeader = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 3rem;
    padding: 0.8rem 0;
    box-sizing: border-box;
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.baseLine};

    div {
      display: flex;
      justify-content: space-between;
      width: 18rem;
    }
  `}
`;

export const OrderDetailsFooter = styled.footer`
  ${({ theme }) => css`
    width: 22.875rem;
    height: 14.875rem;
    border-top: 1px solid ${theme.colors.baseLine};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    div {
      display: flex;
      justify-content: space-between;
    }
  `}
`;

export const CheckoutCardsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;
