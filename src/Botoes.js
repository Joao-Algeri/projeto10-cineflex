import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Botoes({horarios}){ 
    const Navigate=useNavigate();
    function Navegar(endereco){
        Navigate(endereco);
    }
    
    return (
        <Conteudo>
            {horarios.map((horario)=><button  key={horario.id}onClick={()=>Navegar("/assentos")}>{horario.name}</button>)}
        </Conteudo>
    )
}
const Conteudo=styled.div`
margin-left: 4%;
`