import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const Figure = styled.figure`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  width: ${(props) => (props.$expandida ? "100%" : "448px")};
  color: #ffffff;
  border-radius: 20px;
  @media (max-width: 744px) {
    width: ${(props) => (props.$expandida ? "696px" : "246px")};
    min-height: 201px;
  }
  @media (max-width: 360px) {
    width: ${(props) => (props.$expandida ? "311px" : "311px")};
    min-height: 201px;
  }
`;

const FigureImagem = styled.img`
  border-radius: 20px 20px 0 0;
`;

const InfosImagemContainer = styled.figcaption`
  background-color: #001634;
  border-radius: 0 0 20px 20px;
  padding: 16px 21px;
`;

const TituloImagem = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  line-height: 24px;
  @media (max-width: 744px) {
    font-size: 14px;
    line-height: 16px;
  }
  @media (max-width: 360px) {
    text-align: start;
  }
`;

const FigureFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 744px) {
    gap: 16px;
    margin-top: 6px;
  }
  @media (max-width: 360px) {
    text-align: start;
  }
`;

const SubtituloImagem = styled.h4`
  flex-grow: 1;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  line-height: 20px;
  @media (max-width: 744px) {
    font-size: 14px;
  }
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <FigureImagem src={foto.path} alt={foto.titulo} id={foto.id} />
      <InfosImagemContainer>
        <TituloImagem>{foto.titulo}</TituloImagem>
        <FigureFooter>
          <SubtituloImagem>{foto.fonte}</SubtituloImagem>
          <BotaoIcone
            onClick={() => aoAlternarFavorito(foto)}
            icone={<img src={iconeFavorito} alt="Ícone de favorito" />}
          />
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
              icone={<img src="/icones/expandir.png" alt="Ícone de expandir" />}
            />
          )}
        </FigureFooter>
      </InfosImagemContainer>
    </Figure>
  );
};

export default Imagem;
