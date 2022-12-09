import styled from "styled-components"
import axios from "axios"
import Sessao from "./Sessao.js"
export default function Sessoes(){
    return (
        <Conteudo>
             <div className="titulo-topo">Selecione o horário</div>
             <Sessao/>
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
    font-size: 24px;
}
.titulo-meio{
    height: 10vh;
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-left:4%;
    }
    button{
        background: #E8833A;
        border-radius: 3px;
        border:none;
        height: 43px;
        width: 83px;
        color:white;
        font-size: 18px;
        margin-right: 4%;
    }
`