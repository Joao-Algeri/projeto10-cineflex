import styled from "styled-components"
import axios from "axios"
import image6 from  "./img/image6.png"
import { useNavigate } from "react-router-dom";
import "./reset.css";
export default function Assentos({ingresso,setIngresso}) {
        const ASSENTOS=[
        {
            "id": 1,
            "name": "15:00",
            "day": {
                    "id": 24062021,
              "weekday": "Quinta-feira",
              "date": "24/06/2021",
                },
            "movie": {
                "id": 1,
                "title": "2067",
                "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
                "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
                "releaseDate": "2020-10-01T00:00:00.000Z",
            },
            "seats": [
                        {
                    "id": 1,
                    "name": "1",
                    "isAvailable": true,
                },
                {
                    "id": 2,
                    "name": "2",
                    "isAvailable": true,
                },
                {
                    "id": 3,
                    "name": "3",
                    "isAvailable": true,
                },
                {
                    "id": 4,
                    "name": "4",
                    "isAvailable": true,
                },
                {
                    "id": 5,
                    "name": "5",
                    "isAvailable": true,
                },
                {
                    "id": 6,
                    "name": "6",
                    "isAvailable": true,
                },
                {
                    "id": 7,
                    "name": "7",
                    "isAvailable": true,
                },
                {
                    "id": 8,
                    "name": "8",
                    "isAvailable": true,
                },
                {
                    "id": 9,
                    "name": "9",
                    "isAvailable": true,
                },
                {
                    "id": 10,
                    "name": "10",
                    "isAvailable": true,
                },
                {
                    "id": 11,
                    "name": "11",
                    "isAvailable": true,
                },
                {
                    "id": 12,
                    "name": "12",
                    "isAvailable": true,
                },
                {
                    "id": 13,
                    "name": "13",
                    "isAvailable": true,
                },
                {
                    "id": 14,
                    "name": "14",
                    "isAvailable": true,
                },
                {
                    "id": 15,
                    "name": "15",
                    "isAvailable": true,
                },
                {
                    "id": 16,
                    "name": "16",
                    "isAvailable": true,
                },
                {
                    "id": 17,
                    "name": "17",
                    "isAvailable": true,
                },
                {
                    "id": 18,
                    "name": "18",
                    "isAvailable": true,
                },
                {
                    "id": 19,
                    "name": "19",
                    "isAvailable": true,
                },
                {
                    "id": 20,
                    "name": "20",
                    "isAvailable": true,
                },
                {
                    "id": 21,
                    "name": "21",
                    "isAvailable": true,
                },
                {
                    "id": 22,
                    "name": "22",
                    "isAvailable": true,
                },
                {
                    "id": 23,
                    "name": "23",
                    "isAvailable": true,
                },
                {
                    "id": 24,
                    "name": "24",
                    "isAvailable": true,
                },
                {
                    "id": 25,
                    "name": "25",
                    "isAvailable": true,
                },
                {
                    "id": 26,
                    "name": "26",
                    "isAvailable": true,
                },
                {
                    "id": 27,
                    "name": "27",
                    "isAvailable": true,
                },
                {
                    "id": 28,
                    "name": "28",
                    "isAvailable": false,
                },
                {
                    "id": 29,
                    "name": "29",
                    "isAvailable": false,
                },
                {
                    "id": 30,
                    "name": "30",
                    "isAvailable": false,
                },
                {
                    "id": 31,
                    "name": "31",
                    "isAvailable": true,
                },
                {
                    "id": 32,
                    "name": "32",
                    "isAvailable": true,
                },
                {
                    "id": 33,
                    "name": "33",
                    "isAvailable": true,
                },
                {
                    "id": 34,
                    "name": "34",
                    "isAvailable": true,
                },
                {
                    "id": 35,
                    "name": "35",
                    "isAvailable": true,
                },
                {
                    "id": 36,
                    "name": "36",
                    "isAvailable": true,
                },
                {
                    "id": 37,
                    "name": "37",
                    "isAvailable": true,
                },
                {
                    "id": 38,
                    "name": "38",
                    "isAvailable": true,
                },
                {
                    "id": 39,
                    "name": "39",
                    "isAvailable": true,
                },
                {
                    "id": 40,
                    "name": "40",
                    "isAvailable": true,
                },
                {
                    "id": 41,
                    "name": "41",
                    "isAvailable": true,
                },
                {
                    "id": 42,
                    "name": "42",
                    "isAvailable": true,
                },
                {
                    "id": 43,
                    "name": "43",
                    "isAvailable": true,
                },
                {
                    "id": 44,
                    "name": "44",
                    "isAvailable": true,
                },
                {
                    "id": 45,
                    "name": "45",
                    "isAvailable": true,
                },
                {
                    "id": 46,
                    "name": "46",
                    "isAvailable": true,
                },
                {
                    "id": 47,
                    "name": "47",
                    "isAvailable": true,
                },
                {
                    "id": 48,
                    "name": "48",
                    "isAvailable": true,
                },
                {
                    "id": 49,
                    "name": "49",
                    "isAvailable": true,
                },
                {
                    "id": 50,
                    "name": "50",
                    "isAvailable": true,
                },
            ]
        }
    ]
    const navigate=useNavigate();
    function Navegar(){
        const novoIngresso=[{titulo:"alula",data:"15:00",horario:"111",nome:"aaa",CPF:"aaa",assentos:[1,2,3,4,5]}]
        setIngresso(novoIngresso);
        console.log(ingresso)
        navigate("/sucesso");
    }
    return (
        <Conteudo>
            <div className="titulo">Selecione o(s) assento(s)</div>
            <div className="assentos-container">
            {ASSENTOS[0].seats.map((assento)=> assento.isAvailable===true?
            <div className="assento" key={assento.id}>{assento.name}</div>
             :
             <div className="assento amarelo" key={assento.id}>{assento.name}</div>
        )}
            </div>
            <div className="estados-assentos">
           
            <div className="assento-selecionado">
            <div className="assento verde teste"></div>
            <div className="">Selecionado</div>
            </div>
            <div className="assento-disponivel">
            <div className="assento teste"></div>
            <div className="">Disponível</div>
            </div>
            <div className="assento-indisponivel">
            <div className="assento amarelo teste"></div>
            <div className="">Indisponível</div>
            </div>               
            </div>
                <div className="inputs">
                <div className="titulo-inputs">Nome do comprador:</div>
                <input placeholder="Digite seu nome..."/>
                <div className="titulo-inputs">CPF do comprador:</div>
                <input placeholder="Digite seu CPF..."/>
                </div>
                <button onClick={()=>Navegar()}>Reservar assento(s)</button>
                <div className="rodape">
                <div className="moldura">
                    <img src={image6} alt={`poster ${ASSENTOS[0].movie.title}`} />
                </div>
                <div className="titulos-filme">
                <div className="titulo-filme">Enola Holmes</div>
                <div className="titulo-filme">{ASSENTOS[0].day.weekday} - {ASSENTOS[0].name}</div>
                </div>
             </div>
        </Conteudo>
    )
}
const Conteudo=styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10vh;
    height: 80vh;
    background: white;
    color:#293845;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
.titulo{
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    }
.assentos-container{
    display: flex;
    flex-wrap: wrap;
    width: 330px;
    height: 221px;
    }
.assento{
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    border-radius: 13px;
    margin-right: 7px;
    margin-bottom: 18px;
    background: #C3CFD9;
    border:1px solid #808F9D;
    font-size: 11px;
    color: black;
    }
.amarelo{
    background:#FBE192;
    border:1px solid #F7C52B;
}
.verde{
    background:#1AAE9E;
    border:1px solid #0E7D71;
}
.cores-assentos{
    width: 228px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
   }
   .estados-assentos{
    display: flex;
    justify-content:space-around;
    width: 300px;
    font-size:13px ;
    color:#4E5A65;
   }
   .assento-selecionado{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75px;
    font-size:13px ;
      }
   .assento-disponivel{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    font-size:13px ;
    }
.assento-indisponivel{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75px;
    font-size:13px ;
}
.teste{
    margin-right:0px;
    margin-bottom: 2px;
}
.inputs{
    width: 90vw;
    margin-top: 35px;
}
input{
    box-sizing: border-box;
    width: 100%;
    height: 51px;
    border:1px solid #D4D4D4;
    border-radius: 3px;
    color:#AFAFAF;
    font-size: 18px;
    font-style: italic;
    font-family: "Roboto";
    font-weight: 400;
}
.titulo-inputs{
color: #293845;
font-size: 18px;
font-family: "Roboto";
font-weight: 400;
margin-top: 8px;
margin-bottom: 2px;
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
       margin-top: 5px;
    }
    .titulos-filme{
       width: 70%;
    }
    button{
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        color:white;
        border-radius: 3px;
        border:none;
        font-size: 18px;
        margin-top: 80px;
    }
`