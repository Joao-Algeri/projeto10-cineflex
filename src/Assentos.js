import styled from "styled-components"
import axios from "axios"
export default function Assentos(){
    return (
        <Conteudo>
            <div className="titulo">Selecione os assentos</div>
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