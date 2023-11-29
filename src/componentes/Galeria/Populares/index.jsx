import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json";
import Botao from "../../Botao";

const ColunaFotos = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  align-items: center;
  @media (max-width: 744px) {
    max-width: 25vw;
  }
  @media (max-width: 360px) {
    max-width: 100vw;
  }
`;

const Imagem = styled.img`
  max-width: 260px;
  border-radius: 20px;
  @media (max-width: 744px) {
    max-width: 156px;
    height: 156px;
    object-fit: cover;
  }
  @media (max-width: 360px) {
    min-width: 311px;
  }
`;

const Populares = () => {
  return (
    <ColunaFotos>
      <Titulo $alinhamento="center">Populares</Titulo>
      {fotos.map((foto) => (
        <Imagem src={foto.path} alt={foto.alt} key={foto.id} />
      ))}
      <Botao>Ver mais</Botao>
    </ColunaFotos>
  );
};

export default Populares;
