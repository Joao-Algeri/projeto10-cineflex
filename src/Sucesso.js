import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Sucesso({ingresso,setIngresso}) {
const navigate=useNavigate();
function FinalizarPedido(){
    navigate("/");
}
return (
<Conteudo>
<div className="titulo-topo"><br/> com sucesso!</div>
<div className="titulos">
<div className="titulo-meio">Filme e sessão</div>
<div className="titulo-inferior">Enola Holmes</div>
<div className="titulo-inferior">24/06/2021 15:00</div>
</div>
<div className="titulos">
<div className="titulo-meio">Ingressos</div>
<div className="titulo-inferior">Assento 15</div>
<div className="titulo-inferior">Assento 16</div>
</div>
<div className="titulos">
<div className="titulo-meio">Comprador</div>
<div className="titulo-inferior">Nome: João da Silva Sauro</div>
<div className="titulo-inferior">CPF: 123.456.789-10</div>
</div>
<button onClick={()=>FinalizarPedido()}>Voltar pra home</button>
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
.titulos{
margin-left: 7%;
margin-bottom: 12%;
}
.titulo-meio{
font-weight: 700;
font-size: 24px;
color: #293845;
margin-bottom: 3%;

}
.titulo-inferior{
font-weight: 400;
font-size: 22px;
margin-bottom: 1,5%;

}
button{
width: 50%;
height: 42px;
background-color: #E8833A;
color:white;
border-radius: 3px;
border:none;
font-size: 18px;
margin-top: 80px;
margin-left:25%;
}
`
