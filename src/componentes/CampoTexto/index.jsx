import styled from "styled-components";

const CampoTextoEstilizado = styled.input`
  height: 56px;
  box-sizing: border-box;
  padding: 12px 16px;
  width: 602px;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  background: transparent url("/imagens/search.png") no-repeat right;
  color: #d9d9d9;
  outline: none;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #7b78e5;
  }
  &::placeholder {
    color: #d9d9d9;
  }
  @media (max-width: 744px) {
    width: 426px;
  }
  @media (max-width: 360px) {
    max-width: 100%;
  }
`;

const CampoTexto = ({ setFiltro }) => {
  return (
    <CampoTextoEstilizado
      type="text"
      placeholder="O que você procura?"
      onChange={(e) => setFiltro(e.target.value)}
    />
  );
};

export default CampoTexto;
