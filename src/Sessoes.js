import styled from "styled-components"
import axios from "axios"
import image6  from "./img/image6.png"
import Sessao from "./Sessao.js"
export default function Sessoes(){
    const SESSAO=[
        {
            "id": 1,
            "title": "2067",
            "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
            "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
            "releaseDate": "2020-10-01T00:00:00.000Z",
            "days": [
                {
                    "id": 24062021,
                    "weekday": "Quinta-feira",
                    "date": "24/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 1
                        },
                        {
                            "name": "19:00",
                            "id": 2
                        }
                    ]
                },
                {
                    "id": 25062021,
                    "weekday": "Sexta-feira",
                    "date": "25/06/2021",
                    "showtimes": [
                        {
                            "name": "15:00",
                            "id": 3
                        },
                        {
                            "name": "19:00",
                            "id": 4
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <Conteudo>
             <div className="titulo-topo">Selecione o horário</div>
             <Sessao SESSAO={SESSAO}/>
             <div className="rodape">
                <div className="moldura">
                    <img src={image6} alt={`poster ${SESSAO[0].title}`} />
                </div>
                <div className="titulo-filme">Enola Holmes</div>
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
        height: 15vh;
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