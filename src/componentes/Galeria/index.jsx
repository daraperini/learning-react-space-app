import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
  @media (max-width: 744px) {
    max-width: 75vw;
  }
  @media (max-width: 360px) {
    max-width: 100vw;
  }
`;

const ListaDeFotos = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aofotoComZoom, aoAlternarFavorito, setTag }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ListaDeFotos>
            {fotos.map((foto) => (
              <li key={foto.id}>
                <Imagem
                  key={foto.id}
                  foto={foto}
                  aoAlternarFavorito={aoAlternarFavorito}
                  aoZoomSolicitado={aofotoComZoom}
                />
              </li>
            ))}
          </ListaDeFotos>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
