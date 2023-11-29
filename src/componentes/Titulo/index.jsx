import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B78E5;
    font-size: 32px;
    font-weight: 400;
    text-align: ${props => props.$alinhamento ? props.$alinhamento : "left"};
    @media (max-width: 744px) {
    font-size: 28px;  }
    @media (max-width: 360px) {
    font-size: 20px;
  }
`

export default Titulo