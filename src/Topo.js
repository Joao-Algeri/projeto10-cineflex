import styled from "styled-components"
export default function Topo(){
    return (
        <Conteudo>
            CINEFLEX
        </Conteudo>
    )
}
const Conteudo=styled.div`
background: #C3CFD9;
display:flex;
justify-content: center;
align-items: center;
height: 8vh;
width: 100vw;
position: fixed;
top:0px;
left: 0px;
color:#E8833A;
font-size: 34px;
font-weight: 400;
font-family: 'Roboto';
`