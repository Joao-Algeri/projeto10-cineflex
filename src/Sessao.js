import styled from "styled-components"
import Botoes from './Botoes.js'
export default function Sessao(){
    const SESSAO=[
        {
            "id": 27062021,
            "weekday": "Quinta-feira",
            "date": "24/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 7
                },
                {
                    "name": "19:00",
                    "id": 8
                }
            ]
        },
        {
            "id": 27062021,
            "weekday": "Sexta-feira",
            "date": "24/06/2021",
            "showtimes": [
                {
                    "name": "15:00",
                    "id": 7
                },
                {
                    "name": "19:00",
                    "id": 8
                }
            ]
        }
    ]
    return (
        
        <Conteudo>            
          { SESSAO.map((sessao)=>
          <>
          <div className="titulo-meio">{sessao.weekday} - {sessao.date}</div>
          <Botoes horarios={sessao.showtimes}/>
          </>
          )}
        </Conteudo>
    )
}
const Conteudo=styled.div`

`