/*Estilizar o formulario
Limpar o fomulario apos a inclusao ou apos clicar em "Limpar"
Instalar o pacote Sonner e exibir mensagem de inclusao*/

import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import "react-responsive-modal/styles.css";
import "./App.css";

function App() {
  const [filmes, setFilmes] = useState([]);
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, setFocus } = useForm();

  useEffect(() => {
    if (localStorage.getItem("filmes")) {
      const filmes2 = JSON.parse(localStorage.getItem("filmes"));
      setFilmes(filmes2);
    }
  }, []);

  const listaFilmes = filmes.map((filme) => (
    <div key={filme.titulo} className="grid-item">
      <img src={filme.foto} alt="Capa do Filme" />
      <div>
        <h3>{filme.titulo}</h3>
        <p className="genero-duracao">
          {filme.genero} - {filme.duracao} min.
        </p>
        <p className="sinopse">{filme.sinopse}</p>
      </div>
    </div>
  ));

  function abrirForm() {
    setOpen(true);
    setFocus("titulo");

    reset({
      titulo: '',
      genero: '',
      duracao: '',
      foto: '',
      sinopse:'', 
    })
  }

  function incluirFilme(data) {
    const novo = {
      titulo: data.titulo,
      genero: data.genero,
      duracao: data.duracao,
      foto: data.foto,
      sinopse: data.sinopse,
      nota: 0,
      comentario: "",
    };
    const filmes2 = [novo, ...filmes];
    setFilmes(filmes2);
    localStorage.setItem("filmes", JSON.stringify(filmes2));
    
    setOpen(false);
  }

  return (
    <>
      <header>
        <img src="./pipoca.png" alt="Cinema e Pipoca" />
        <div>
          <h1>App Controle de Filmes</h1>
          <h2>Cadastro e Avaliação Pessoal de Filmes</h2>
        </div>
      </header>
      <main>
        <div className="h2-btn">
          <h2>Cadastro de Filmes</h2>
          <button onClick={abrirForm}>Adicionar</button>
        </div>
        <div className="grid-filmes">{listaFilmes}</div>
      </main>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2>Formulário de Cadastro de Filmes</h2>
        <form onSubmit={handleSubmit(incluirFilme)}>
          <p>
            <label htmlFor="titulo">Titulo: </label>
            <input type="text" id="titulo" required {...register("titulo")} />
          </p>
          <p>
            <label htmlFor="genero">Gênero: </label>
            <input type="text" id="genero" required {...register("genero")} />
          </p>
          <p>
            <label htmlFor="duracao">Duração (min): </label>
            <input type="text" id="duracao" required {...register("duracao")} />
          </p>
          <p>
            <label htmlFor="foto">URL da foto: </label>
            <input type="text" id="foto" required {...register("foto")} />
          </p>
          <p>
            <label htmlFor="sinopse">Sinopse: </label>
            <textarea
              id="sinopse"
              required
              rows={3}
              placeholder="Escreva a sinopse aqui."
              {...register("sinopse")}
            ></textarea>
          </p>
          <input type="submit" value="Incluir" />
          <input type="reset" value="Limpar"/>
        </form>
      </Modal>
    </>
  );
}

export default App;
''