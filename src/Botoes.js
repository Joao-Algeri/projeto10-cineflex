import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Botoes({ horarios }) {
    const Navigate = useNavigate();
    function Navegar(endereco) {
        Navigate(endereco);
    }
    if (horarios.showtimes === undefined) {
        return <div>Carregando</div>
    }
    return (
        <Conteudo>
            {horarios.showtimes.map((horario) => <button  data-test="showtime" key={horario.id} onClick={() => Navegar(`/assentos/${horario.id}`)}>{horario.name}</button>)}
        </Conteudo>
    )
}
const Conteudo=styled.div`
margin-left: 4%;
`