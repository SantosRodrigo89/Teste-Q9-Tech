import React, { useState } from "react";
import Photo from "../../Components/Photo/photo";
import ScrollToTop from "../../Components/scroll/scrollToTop";
import { GetList } from "../../Hooks/GetList";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { BreedOptions, Header, MainContainer, PhotoList } from "./styled";

const DogList = () => {
  useProtectedPage();

  const [breed, setBreed] = useState("chihuahua");
  const [update, setUpdate] = useState(false);
  const lista = GetList(breed, update);

  const clickBreed = (event) => {
    const raça = event.target.value;
    setBreed(raça);
    setUpdate(!update);
  };

  return (
    <MainContainer>
      <Header>
        <h1>Doguinhos</h1>
        <p>Escolha uma raça</p>
        <BreedOptions>
          <button onClick={clickBreed} value={"chihuahua"}>
            Chihuahua
          </button>
          <button onClick={clickBreed} value={"husky"}>
            Husky
          </button>
          <button onClick={clickBreed} value={"pug"}>
            Pug
          </button>
          <button onClick={clickBreed} value={"labrador"}>
            Labrador
          </button>
        </BreedOptions>
      </Header>
      <PhotoList>
        {lista.length > 0 ? (
          lista.map((foto) => {
            return <Photo foto={foto} />;
          })
        ) : (
          <></>
        )}
      </PhotoList>
      <ScrollToTop />
    </MainContainer>
  );
};

export default DogList;
