import { useState } from 'react'
import './App.css'

function App() {
  
  const [cor, setCor] = useState("vermelha")
  const [mensa, setMensa] = useState("Sinal Vermelho: Proibido Passar")
  
  function trocaSinaleira() {
    //alert("Clicou...")
    if (cor == "vermelha") {
      setCor("verde")
      setMensa("Sinal Verde: Pode Passar")
    } else if (cor == "amarela") {
      setCor("vermelha")
      setMensa("Sinal Vermelho: Proibido Passar")
    } else {
      setCor("amarela")
      setMensa("Sinal Amarelo: Atenção... Sinal vai Fechar")
    }
  }

  return (
    <>
      <h1 className='titulo'>Escola de Trânsito</h1>
      <h2>Aula sobre sinaleiras</h2>
      <hr />
      <>
      {/*<img src={cor+".png"} alt="Sinaleira" className='img-sinaleira' onClick={trocaSinaleira}/>*/}
      <img src={`${cor}.png`} alt="Sinaleira" className='img-sinaleira' onClick={trocaSinaleira}/>
      <h2 className={cor}>{mensa}</h2>
      </>
      <h3><i>* Clique sobre a sinaleira para ver as outras cores</i></h3>
    </>
  )
}

export default App
