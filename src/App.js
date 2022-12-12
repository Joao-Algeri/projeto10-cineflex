import styled from "styled-components"
import {useState,useEffect} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Topo from "./Topo"
import Filmes from "./Filmes"
import Sessoes from "./Sessoes"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"
import "./reset.css";
export default function App() {
  const [ingresso,setIngresso]=useState([]);
  return (
    <BrowserRouter>
      <Topo/>
      <Routes>
        <Route path="/" element={<Filmes/>}/>
        <Route path="/sessoes/:idsessao" element={<Sessoes/>}/>
        <Route path="/assentos" element={<Assentos ingresso={ingresso} setIngresso={setIngresso}/>}/>
        <Route path="/sucesso" element={<Sucesso ingresso={ingresso} setIngresso={setIngresso}/>}/>
        </Routes>
    </BrowserRouter>
  )
}