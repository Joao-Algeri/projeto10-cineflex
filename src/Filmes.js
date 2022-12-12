import styled from "styled-components"
import Filme from "./Filme"
export default function Filmes() {
    return (
        <Conteudo>
            <div className="titulo">Selecione o filme</div>
            <Filme />
        </Conteudo>
    )
}
const Conteudo=styled.div`
    margin-top: 10vh;
    height: 80vh;
    background: white;
    color:#293845;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
.titulo{
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
`