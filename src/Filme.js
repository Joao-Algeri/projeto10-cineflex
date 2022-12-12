import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Filme() {
    const Navigate = useNavigate();
    const [filmes, setFilmes] = useState([]);
    function Navegar(caminho) {
        Navigate(caminho);
    }
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        requisicao.then(resposta => { setFilmes(resposta.data) })
    }, [])
    if (filmes === undefined) {
        return <div>Loading</div>
    }
       return (
        <Conteudo>

            {filmes.map((poster) =>

                <div onClick={() => Navegar(`/sessoes/${poster.id}`)} key={poster.id} className="moldura">
                    <img key={poster.title} src={poster.posterURL} alt={`poster filme ${poster.title}`} />
                </div>
            )}

        </Conteudo>
    )
}
const Conteudo=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
.moldura{
    height: 209px;
    width: 145px;
    display:flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 3%;
}
img{
    height: 90%;
    width: 90%;
}
.poster-container{
    width: 80vw;
    }
`