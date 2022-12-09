import styled from "styled-components"
import image3 from  "./img/image3.png"
import image6 from  "./img/image6.png"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
export default function Filme(){
    const POSTERS=[image3,image6,image3,image6,image3,image6,image3,image6,image3,image6];
    const Navigate=useNavigate();
    function Navegar(caminho){
        Navigate(caminho);
    }
    return (
        <Conteudo>
            
            {POSTERS.map((poster,index)=>
            
            <div onClick={()=>Navegar("/sessoes")}key={index}className="moldura">
            <img key={index+1}src={poster} alt={`poster filme ${index+1}`}/>
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
.poster-container{
    width: 80vw;
    }
`