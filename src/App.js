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
  return (
    <BrowserRouter>
      <Topo/>
      <Routes>
        <Route path="/" element={<Filmes/>}/>
        <Route path="/sessoes" element={<Sessoes/>}/>
        <Route path="/assentos" element={<Assentos/>}/>
        <Route path="/sucesso" element={<Sucesso/>}/>
        </Routes>
    </BrowserRouter>
  )
}