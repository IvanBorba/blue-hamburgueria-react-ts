import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #252836;
  color: #fff;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display", cursive;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 173px;
  height: 48px;
  background: #2d303e;
  border: 1px solid #393c49;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 10px;

  input {
    background: #2d303e;
    width: 120px;
    height: 38px;
    color: #ffffff;
    font-size: 14px;

    :focus {
      outline: none;
    }
  }
`;

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #393c49;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: #252836;

  :hover {
    color: #ffffff;
  }

  ${({ active }) =>
    active &&
    css`
      color: #6cea69;
      border-bottom: 2px solid #6cea69;
    `}
`;

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 48px;
  background-color: #e26b6b;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: #ffffff;
  padding: 0 1rem;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;
