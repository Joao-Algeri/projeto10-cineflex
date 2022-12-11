import Botoes from './Botoes.js'
export default function Sessao({SESSAO}){
           return (
        <>            
          { SESSAO[0].days.map((sessao)=>
          <>
          <div key={sessao.id} className="titulo-meio">{sessao.weekday} - {sessao.date}</div>
          <Botoes horarios={sessao.showtimes}/>
          </>
          )}
        </>
    )
}