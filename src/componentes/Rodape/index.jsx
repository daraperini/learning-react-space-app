import styled from "styled-components";
import BotaoIcone from "../BotaoIcone";

const FooterEstilizado = styled.footer`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #04244f;
  min-width: 100%;
  padding: 24px;
  margin-top: 72px;
  justify-content: space-between;
  p {
    color: #fff;
    font-size: 16px;
    margin: 0;
    font-weight: 500;
  }
  button {
    margin-right: 35px;
  }
  @media (max-width: 360px) {
    flex-direction: column-reverse;
    gap: 28px;
    button{
      margin: 0 12px;
    }
  }
`;

const Rodape = () => {
  return (
    <FooterEstilizado>
      <div>
        <a href="https://www.facebook.com/AluraCursosOnline">
          <BotaoIcone
            icone={
              <img src="/icones/sociais/facebook.svg" alt="Ícone do Facebook" />
            }
            onClick={() => {}}
          />
        </a>
        <a href="https://twitter.com/AluraOnline">
          <BotaoIcone
            icone={
              <img src="/icones/sociais/twitter.svg" alt="Ícone do Twitter" />
            }
          />
        </a>
        <a href="https://www.instagram.com/aluraonline/">
          <BotaoIcone
            icone={
              <img
                src="/icones/sociais/instagram.svg"
                alt="Ícone do Instagram"
              />
            }
          />
        </a>
      </div>
      <p>Desenvolvido por Alura.</p>
    </FooterEstilizado>
  );
};

export default Rodape;
