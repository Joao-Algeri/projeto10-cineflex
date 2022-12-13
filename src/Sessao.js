import Botoes from './Botoes.js'
export default function Sessao({ sessao }) {
  if (sessao.days == undefined) {
    return <div>Carregando</div>
  }
  return (
    <>
      {sessao.days.map((SESSAO) =>
        <div data-test="movie-day">
          <div key={SESSAO.id} className="titulo-meio">{SESSAO.weekday} - {SESSAO.date}</div>
          <Botoes horarios={SESSAO} />
        </div>
      )}
    </>
  )
}