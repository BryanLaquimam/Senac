import { useState } from 'react'
import './App.css'


function App() {
  const[mesas, setMesas] = useState(10); 

  function entradaCliente() {
    //alert("Cliente Chegou")
    const num = mesas - 1
    if (num < 0){
      alert("Não há mesas disponiveis... Por favor, aguarde.")
      setMesas(0)
    } else {
      setMesas(num)
    }
                           // mudança do valor da variavel
                                          // deve ocorrer a partir da função
  
  }

  function saidaCliente() {
    //alert("Cliente saiu")
    const num = mesas + 1
    if (num > 10) {
      alert("Não há cliente no momento.")
      setMesas(10)
    } else {
      setMesas(num)
    }
  }

  return (
    <>
      <h1>Programação Web</h1>
      <h2>Laboratório Tech</h2>
      <img src="./restaurante.jfif" alt="Restaurante" className='imagem' />
      <h2>Mesas Disponiveis: 
        <span className='azul'>{mesas}</span> 
        - Mesas Ocupadas: 
        <span className='vermelho'>{10-mesas}</span></h2>
      <button onClick={entradaCliente}>Entrada de Cliente</button>&nbsp;&nbsp;
      <button onClick={saidaCliente}>Saida de Cliente</button>
    </>  
  )
}

export default App
