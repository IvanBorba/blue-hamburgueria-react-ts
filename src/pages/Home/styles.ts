import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #252836;
  color: #fff;
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

  div {
    h1 {
      font-family: "Big Shoulders Inline Display", cursive;
    }
  }
`;
