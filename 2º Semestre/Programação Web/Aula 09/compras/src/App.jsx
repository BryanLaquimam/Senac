import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, reset, setFocus} = useForm();
  const [compras, setCompras] = useState([]);

  const listaCompras = compras.map((compra) => (
    <p className="lista" key={compra.descricao}>
      <span>{compra.descricao}</span>
      <span>
        R$: {compra.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
      </span>
    </p>
  ));

  function cadastrar(data) {
    // alert(data.descricao + " R$:" + data.preco);
    const compras2 = [...compras];
    compras2.push({ descricao: data.descricao, preco: Number(data.preco) });
    setCompras(compras2);
    localStorage.setItem("compras", JSON.stringify(compras2));
    reset({
      descricao: "",
      preco: "",
    });
  }

  function Limpar(data) {
    setCompras([]);
    localStorage.removeItem("compras");
    reset();
  }

  //useEffect em referencia a algum "efeito colateral", algo que ocorre
  //apos algum evento (no caso, o componente ser renderizado)
  useEffect(() => {
    if (localStorage.getItem("compras")) {
      const compras2 = JSON.parse(localStorage.getItem("compras"));
      setCompras(compras2);
    }
    setFocus("descricao"); // Colocando o foco na inicialização
  }, [setFocus]);

  return (
    <>
      <header>
        <img src="./logo.png" alt="" />
        <div>
          <h1>Lista de Compras</h1>
          <h2>Controle Pessoal de Compras do Supermercado</h2>
        </div>
      </header>

      <main>
        <img src="./amigaosuper.jpg" alt="" />
        <div>
          <h3>Formulario de Cadastro de Produtos</h3>
          <form onSubmit={handleSubmit(cadastrar)}>
            <p>
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                id="descricao"
                required
                {...register("descricao")}
              />
            </p>
            <p>
              <label htmlFor="preco">Preço R$:</label>
              <input
                type="number"
                id="preco"
                step="0.10"
                required
                {...register("preco")}
              />
            </p>
            <input type="submit" value="Cadastrar" /> &nbsp;
            <input type="submit" value="Limpar" onClick={Limpar} />
          </form>
          <hr />
          <h3>Lista dos Produtos Cadastrados</h3>
          {listaCompras}
        </div>
      </main>
    </>
  );
}

export default App;
