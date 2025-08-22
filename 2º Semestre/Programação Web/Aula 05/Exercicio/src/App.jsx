import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const { register, handleSubmit, reset, watch } = useForm();
  const { carro, setCarro } = useState("");
  const { total, setTotal } = useState("");
  const { parcela, setParcela } = useState("");


  // Função para calcular o preço do seguro
  function calcularSeguro(data) {
    const modelo = data.modelo
    const marca = data.marca
    const preco = Number(data.preco)
    const condutor = data.condutor
    const cliente = data.cliente

    if (condutor == null) {
      alert("Selecione o condutor principal");
      return;
    }

    let valTotal
    if (condutor === "homem") {
      valTotal = preco * 0.03;
    } else {
      valTotal = preco * 0.02;
    }

    if (cliente == "x") {
      valTotal = valTotal * 0.9;
    }

    const valParcela = valTotal / 24;

    setCarro(`Simulado de Seguro: ${modelo} ${marca}`);
    setTotal(`Valor total para 2 anos R$: ${valTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);
    setParcela(`ou Em 24x parcelas de R$: ${valParcela.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);
  }

  return (
    <>
    <div className="container">
      <img src="./logo.png" alt="" className="img" />
      <div className="titulos">
      <h1>Avenida Seguros</h1>
      <hr />
      <h2>App Seguro de Veículos</h2>
      </div>
    </div>
      <form>
        <p>
          <label htmlFor="modelo">Modelo do Veículo: </label>
          <input type="text" id="modelo" required />
        </p>
        <p>
          <label htmlFor="marca">Marca: </label>
          <select id="marca">
            <option value="">Selecione...</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="ford">Ford</option>
            <option value="fiat">Fiat</option>
            <option value="volkswagen">Volkswagen</option>
          </select>
        </p>

        <p>
          <label htmlFor="preco">Preço R$:</label>
          <input type="text" id="preco" required />
        </p>

        <p>
          <label htmlFor="condutor">Principal Condutor: </label>
          <input type="radio" id="condutor" value="homem" name="condutor" /> Homem
          <input type="radio" id="condutor" value="mulher" name="condutor" /> Mulher
        </p>


        <p>
          <label htmlFor="cliente">Cliente Avenida: </label>
          <input type="checkbox" id="cliente" value="x" /> É Renovação?
        </p>
        <input type="submit" value="Simular Seguro" className="btn" />&nbsp;&nbsp;
        <input type="reset" value="Limpar Dados" className="btn" />
      </form>
      <h2>{carro}</h2>
      <h2>{total}</h2>
      <h2>{parcela}</h2>
    </>
  );
}

export default App;
