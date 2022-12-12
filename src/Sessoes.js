import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Sessao from "./Sessao.js"
export default function Sessoes() {
    const [sessao, setSessao] = useState([]);
    const params = useParams();
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idsessao}/showtimes`);
        requisicao.then(resposta => { setSessao(resposta.data) })
    }, [])

    if (sessao === undefined) {
        return <div>Loading</div>
    }
    else {
    }
    return (
        <Conteudo>
            <div className="titulo-topo">Selecione o horário</div>
            <Sessao sessao={sessao} />

            <div data-test="footer" className="rodape">
                <div className="moldura">
                    <img src={sessao.posterURL} alt={`poster ${sessao.title}`} />
                </div>
                <div className="titulo-filme">{sessao.title}</div>
            </div>
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
    .rodape{
        background: #C3CFD9;
        display:flex;
        align-items: center;
        height: 13vh;
        width: 100vw;
        position: fixed;
        bottom:0px;
        left: 0px;
        font-size: 26px;
        font-weight: 400;
        font-family: 'Roboto';
        border-top:1px solid #9EADBA;
    }
    .moldura{
        height: 80%;
        width: 16%;
        background: white;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-left: 4%;
    }
    img{
        height: 87%;
        width: 80%;
    }
    .titulo-filme{
       margin-left: 4%;
    }
`