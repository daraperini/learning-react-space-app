import styled from "styled-components";

const BotaoIconeEstilizado = styled.button`
  cursor: pointer;
  height: 24px;
  width: 24px;
  background: none;
  border: none;
  padding: 0;
`;

const BotaoIcone = ({ icone, onClick }) => {
  return <BotaoIconeEstilizado onClick={onClick}>{icone}</BotaoIconeEstilizado>;
};

export default BotaoIcone;
