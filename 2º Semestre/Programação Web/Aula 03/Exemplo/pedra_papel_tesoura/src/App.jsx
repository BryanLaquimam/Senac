import { useState } from 'react'
import './App.css'

function App() {
  const [figura, setFigura] = useState("")
  const [figuraPC, setFiguraPC] = useState("")
  const [mensagem, setMensagem] = useState("")

  function mostraAposta(imagem) {
    if(figuraPC != "") {
      alert("Erro... Você já apostou. Clique em jogar Novamente")
      return
    }
    setFigura(imagem)
  }

  function reset(){
    setFiguraPC("")
    setFigura("")
    setMensagem("")
  }

  function desafiarPC() {
    if(figura == ""){
      alert("Erro... Você deve primeiro fazer a sua aposta")
      return
    }
    const num = Math.ceil(Math.random()*3)
    let temp
    if(num == 1){
      temp = "pedra"
    } else if (num == 2) {
      temp = "papel"
    } else {
      temp = "tesoura"
    }
    setFiguraPC(temp)
    if(figura == temp) {
      setMensagem("Ah... Deu empate! Tente Novamente")
    } else if (
      (figura == "pedra" && temp == "tesoura")||
      (figura == "papel" && temp == "pedra")||
      (figura == "tesoura" && temp == "papel")
    ) {
      setMensagem("Uhuuu... Parábens! Você venceu!")
    } else {
      setMensagem("Bah... Deu ruim. Você perdeu!")
    }



  }

  return (
    <>
      <h1 className='cor-vermelha fonte-g1'>Jogo: Pedra, Papel, Tesoura</h1>
      <hr />
      <h2 className='cor-verde fonte-g2'>Clique sobre a imagem para fazer a sua aposta</h2>
      <img src="./pedra.png" onClick={() => mostraAposta("pedra")} className='img-pequena ponteiro' alt="Pedra" />
      <img src="./papel.png" onClick={() => mostraAposta("papel")} className='img-pequena ponteiro' alt="Papel" />
      <img src="./tesoura.png" onClick={() => mostraAposta("tesoura")} className='img-pequena ponteiro' alt="Tesoura" />
      {figura &&
        <>
          <span className='cor-verde fonte-g2 margin-esq'>Sua aposta é: </span>
          <img src={`${figura}.png`} className='img-grande margin-esq' alt="Tesoura" />
        </>
      }
      
      <h2 className='cor-azul fonte-g2 margin-sup'>Clique em Desafiar PC para ver o resultado do jogo
        <button className='margin-esq ponteiro' onClick={desafiarPC}>Desafiar PC</button>
      </h2>

      <img src="./pedra.png" className='img-pequena ponteiro' alt="Pedra" />
      <img src="./papel.png" className='img-pequena ponteiro' alt="Papel" />
      <img src="./tesoura.png" className='img-pequena ponteiro' alt="Tesoura" />
      
      {figuraPC &&
        <>
          <span className='cor-verde fonte-g2 margin-esq'>Computador Apostou: </span>
          <img src={`${figuraPC}.png`} className='img-grande margin-esq' alt=''/>
        </>
      }  
      <h2 className='cor-vermelha fonte-g1'>
        {mensagem}
      </h2>
      {figura && figuraPC && mensagem &&
        <h2><button className='ponteiro' onClick={reset}>Jogar Novamente</button></h2>
      }
    </>
  )
}

export default App
