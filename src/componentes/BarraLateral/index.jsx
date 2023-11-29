import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";
import BotaoIcone from "../BotaoIcone";
import { useEffect, useState } from "react";

const MenuLateral = styled.aside`
  button {
    display: none;
  }
  @media (max-width: 744px) {
    position: absolute;
  }
  @media (max-width: 360px) {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    max-width: 255px;
    padding: 40px 24px 10px 24px;
    button {
      display: block;
      position: absolute;
      top: 46px;
      left: 24px;
    }
  }
`;

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
  @media (max-width: 360px) {
    background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244f 48%,
      #154580 96.76%
    );
    padding: 40px 40px 10px 40px;
    display: ${(props) => (props.$fechado ? "none" : "block")};
  }
`;

const BarraLateral = ({ fechado = true }) => {
  const [mostraMenu, setMostraMenu] = useState(fechado);

  const abreMenu = () => {
    setMostraMenu(!mostraMenu);
  };

  return (
    <MenuLateral>
      <BotaoIcone
        onClick={() => abreMenu()}
        icone={<img src="./icones/menu.png" alt="Ícone de menu" />}
      />
      <nav>
        <ListaEstilizada $fechado={mostraMenu}>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={true}
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo={false}
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
            ativo={false}
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
            ativo={false}
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
            ativo={false}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </MenuLateral>
  );
};

export default BarraLateral;
