import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogEstilizado = styled.dialog`
  position: fixed;
  top: 5%;
  background: transparent;
  border: 0;
  padding: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: absolute;
      right: 24px;
      top: 24px;
    }
  }
  @media (max-width: 744px) {
    width: auto;
    top: 125px;
  }
  @media (max-width: 360px) {
    z-index: 2;
    form {
    button {
      right: 36px;
      top: 20px;
    }
  }
}
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {

  return (
    <>
      {foto && (
        <>
          <OverLay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
            <form method="dialog">
              <BotaoIcone
                type="submit"
                icone={<img src="/icones/fechar.png" alt="Ícone de fechar" />}
              />
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
