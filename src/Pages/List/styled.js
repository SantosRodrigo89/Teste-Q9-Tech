import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  background-color: #e1e2e6;

  @media screen and (max-width: 480px) {
    min-height: 100vh;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 20vh;
  justify-content: center;
  align-items: center;
  background-color: #fcc401;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #2e2123;
  border-bottom: #fdf5dd solid 4px;
  border-bottom-style: dashed;
  h1 {
    font-size: 60px;
    margin: 15px;
  }
  p {
    margin: 10px;
  }
`;

export const BreedOptions = styled.div`
  display: flex;
  width: 100%;
  margin: 15px;
  justify-content: center;
  button {
    margin: 10px;
    margin-bottom: 20px;
    padding: 15px;
    border: none;
    border-radius: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    font-weight: bold;
    background-color: #2e2123;
    transition: 0.2s;
    color: #fcc401;

    :hover {
      cursor: pointer;
      transition: 0.2s;
      transform: scale(1.02);
      box-shadow: 0px 0px 10px black;
    }

    @media screen and (max-width: 480px) {
      margin: 2%;
      margin-bottom: 4%;
      padding: 12px;
      border: none;
      border-radius: 12px;
    }
  }
`;

export const PhotoList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
