import { useState } from 'react';
import './App.css';

function App() {
  const [tenis, setTenis] = useState("tenis1");

  function trocaTenis(novoTenis) {
    setTenis(novoTenis);
  }

  return (
    <>
      <h1 className='titulo'>Calçados Avenida</h1>
      <h2 className='subtitulo'>Veja detalhes do tênis: <span className='mensatenis'>Vapor Foam</span></h2>
      <hr />
      <img src={`${tenis}.jpg`} alt="Tênis em destaque" className='img-principal'/>
      <br />
      <img
        src="./tenis1.jpg"
        alt="Tênis 1"
        className='img-tenis'
        onClick={() => trocaTenis("tenis1")}
      />
      <img
        src="./tenis2.jpg"
        alt="Tênis 2"
        className='img-tenis'
        onClick={() => trocaTenis("tenis2")}
      />
      <img
        src="./tenis3.jpg"
        alt="Tênis 3"
        className='img-tenis'
        onClick={() => trocaTenis("tenis3")}
      />
    </>
  );
}

export default App;


