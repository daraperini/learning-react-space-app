import { styled } from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import backgroundImage from "/src/assets/banner.png";
import Galeria from "./componentes/Galeria";

import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./componentes/ModalZoom";
import Rodape from "./componentes/Rodape";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  min-width: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  @media (max-width: 744px) {
    min-width: 744px;
  }
  @media (max-width: 360px) {
    min-width: 360px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100vw;
  box-sizing: border-box;
  @media (max-width: 744px){
    width: 744px;
    padding: 45px 28px 0 28px;
  }
  @media (max-width: 360px) {
    width: 360px;
    padding: 24px;
  }
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1440px;
  @media (max-width: 744px) {
    max-width: 740px;
  }
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoComZoom, setFotoComZoom] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [tag, setTag] = useState(0);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoComZoom?.id) {
      setFotoComZoom({
        ...fotoComZoom,
        favorita: !fotoComZoom.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  useEffect(() => {
    const fotosFiltradas = fotos.filter((foto) => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorPesquisa = foto.titulo
        .toLowerCase()
        .includes(filtro.toLowerCase());

      return filtroPorTag && filtroPorPesquisa;
    });
    setFotosDaGaleria(fotosFiltradas);
  }, [tag, filtro]);

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setFiltro={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={backgroundImage}
            />
            <Galeria
              aofotoComZoom={(foto) => setFotoComZoom(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              setTag={setTag}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoComZoom}
        aoFechar={() => setFotoComZoom(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;

// OPÇÃO DE FILTRAGEM USANDO FUNÇÕES COM FILTER AO INVES DE USEEFFECT

// const aoFiltrarFotosPorTag = (tag) => {
//   if (tag.id === 0) {
//     return setFotosDaGaleria(fotos);
//   }

//   setFotosDaGaleria(
//     fotos.filter((foto) => {
//       return foto.tagId === tag.id;
//     })
//   );
// };

// const aoFiltrarFotosPorPesquisa = (inputValue) => {
//   setFotosDaGaleria(
//     fotos.filter((foto) => {
//       return foto.titulo.toLowerCase().includes(inputValue.toLowerCase());
//     })
//   );
// };

//Passar props por prop drilling até os componentes Tags e CampoBusca

//em Tags passar (tag)
//em CampoBusca passar (e.target.value)
