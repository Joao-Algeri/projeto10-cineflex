import styled from "styled-components"
export default function Sucesso({ingresso,setIngresso}) {
      return (
        <Conteudo>
            <div className="titulo-topo">Pedido feito<br/> com sucesso!</div>
                   </Conteudo>
    )
}
const Conteudo=styled.div`
 margin-top: 10vh;
    height: 80vh;
    background: white;
    color:#293845;
    font-family: 'Roboto';
    font-weight: 400;
.titulo-topo{
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    color: #247A6B;
    font-weight: 700;
}
`