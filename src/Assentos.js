import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./reset.css";
export default function Assentos({ ingresso, setIngresso }) {
    const params = useParams();
    const navigate = useNavigate();
    const [assentos, setAssentos] = useState([]);
    const [idAssentos, setIdAssentos] = useState([])
    const [nome, setNome] = useState("");
    const [CPF, setCPF] = useState("");
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idassento}/seats`);
        requisicao.then(resposta => { setAssentos(resposta.data) })
    }, [])
    if (assentos === undefined || assentos.seats === undefined) {
        return <div>Loading</div>
    }
    function Navegar() {
        function TratarSucesso() {
            navigate("/sucesso")
        }
        function TratarErro(erro) {
            console.log(erro.status)
        }
        function TrataEnvio(pedido) {
            pedido.then(TratarSucesso);
            pedido.catch(TratarErro);
        }
        if (
            nome !== null && nome !== "" && nome !== undefined &&
            CPF !== null && CPF !== "" && CPF !== undefined && CPF.length === 11 &&
            idAssentos !== null && idAssentos !== "" && idAssentos !== undefined && idAssentos.length > 0) {

            const novoIngresso = [{ titulo: assentos.movie.title, data: assentos.day.date, horario: assentos.name, Nome: nome, cpf: CPF, assentos: assentosEscolhidos }]
            setIngresso(novoIngresso);
            const pedido = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", { ids: idAssentos, name: nome, cpf: CPF })
            TrataEnvio(pedido)
        }
        else {
            if (nome === null || nome === "" || nome === undefined) {
                alert("Informe seu nome");
            }
            else if (CPF === null || CPF === "" || CPF === undefined) {
                alert("Informe seu CPF");
            }
            else if ((CPF.length > 0 && CPF.length < 11) || CPF.length > 11) {
                alert("CPF invalido");
            }
            else if (idAssentos === null || idAssentos === "" || idAssentos === undefined || idAssentos.length === 0) {
                alert("Selecione seu(s) assento(s)");
            }
        }
    }
    function SelecionaAssento(id, nome) {
        function compararNumeros(a, b) {
            return a - b;
        }
        const idNumero = Number(id);
        const nomeNumero = Number(nome);
        const novoidAssentos = [...idAssentos];
        const novoEscolhidos = [...assentosEscolhidos];
        if (idAssentos.includes(idNumero)) {

            novoidAssentos.splice(novoidAssentos.indexOf(idNumero), 1);
            novoidAssentos.sort();
            novoEscolhidos.splice(novoidAssentos.indexOf(nomeNumero), 1);
            novoEscolhidos.sort();
            setIdAssentos(novoidAssentos);
            setAssentosEscolhidos(novoEscolhidos);
        }
        else {
            novoidAssentos.push(idNumero);
            novoidAssentos.sort(compararNumeros);
            novoEscolhidos.push(nomeNumero);
            novoEscolhidos.sort(compararNumeros);
            setIdAssentos(novoidAssentos);
            setAssentosEscolhidos(novoEscolhidos);
        }
    }
    return (
        <Conteudo>
            <div className="titulo">Selecione o(s) assento(s)</div>
            <div className="assentos-container">
                {assentos.seats.map((assento) => assento.isAvailable === false ?
                    <div data-test="seat" className="assento amarelo" key={assento.name}>{assento.name}</div>
                    :
                    idAssentos.includes(assento.id) ?
                        <div data-test="seat" onClick={() => SelecionaAssento(assento.id, assento.name)} className="assento verde" key={assento.id}>{assento.name}</div>
                        :
                        <div data-test="seat" onClick={() => SelecionaAssento(assento.id, assento.name)} className="assento" key={assento.id}>{assento.name}</div>

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
                <input  data-test="client-name"required onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome..." />
                <div className="titulo-inputs">CPF do comprador:</div>
                <input data-test="client-cpf" type="CPF" required onChange={(e) => setCPF(e.target.value)} placeholder="Digite seu CPF..." />
            </div>
            <button data-test="book-seat-btn" onClick={() => Navegar()}>Reservar assento(s)</button>
            <div data-test="footer" className="rodape">
                <div className="moldura">
                    <img src={assentos.movie.posterURL} alt={`poster ${assentos.movie.title}`} />
                </div>
                <div className="titulos-filme">
                    <div className="titulo-filme">{assentos.movie.title}</div>
                    <div className="titulo-filme">{assentos.day.weekday} - {assentos.name}</div>
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