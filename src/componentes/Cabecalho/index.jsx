import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
  @media (max-width: 744px) {
    padding-bottom: 48px;
    padding-top: 0;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: end;
    padding-bottom: 32px;
  }
`;

const Cabecalho = ({ setFiltro }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="Logo do Space App" />
      <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
