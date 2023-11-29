import styled from "styled-components";

const BotaoEstilizado = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 14px 0;
  margin-top: 16px;
  text-align: center;
  font-weight: 700;
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: #7b78e5;
  }
  @media (max-width: 744px) {
    max-width: 156px;
  }
  @media (max-width: 360px) {
    max-width: 100vw;
  }
`;

const Botao = ({ children }) => {
  return <BotaoEstilizado>{children}</BotaoEstilizado>;
};

export default Botao;
