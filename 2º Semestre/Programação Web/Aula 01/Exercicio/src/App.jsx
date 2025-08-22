import { useState } from 'react'
import './App.css'


function App() {
  const[imovel, setImovel] = useState(null); 


  function Casa() {
    setImovel("Casa")
  }

  function Apartamento() {
    setImovel("Apartamento")
  }

  return (
    <>
      <h1>Imobiliária Avenida</h1>
      <h2>Qual tipo de imóvel você procura?</h2>
      <img src="./casa.webp" alt="casa" className='imagem' onClick={Casa}/>
      <img src="./apartamento.jfif" alt="apartamento" className='imagem' onClick={Apartamento}/>
      <h2>Você selecionou:
        <span className='vermelho'>{imovel}</span>
      </h2>
    </>  
  )
}

export default App
