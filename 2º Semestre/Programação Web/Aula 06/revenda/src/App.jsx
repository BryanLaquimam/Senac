import { useState } from "react";
import {useForm} from "react-hook-form";
import "./App.css";

function App() {
  const {register, watch} = useForm({
    defaultValues: {
      modelo: "siena.jfif"
    }
  });

  function calcularPreco() {
    let preco = 0;
    if(watch("modelo") == "siena.jfif") {
      preco =  24181;
    } else if(watch("modelo") == "stradavermelho.jfif") {
      preco =  74908;
    } else {
      preco =  91912;
    }
    // if (watch("alarme") == true) {}
    if (watch("alarme")) {
      preco = preco + 1200;
    }
    if (watch("vidros")) {
      preco = preco + 2000;
    }
    
    return preco;
  }

  // console.log(watch("modelo"));

  return (
    <>
      <header>
        <img src="./fiat__logo.png" alt="Logo da Fiat" />
        <div>
          <h1>Revenda Avenida</h1>
          <h2>Promoção de Aniversário - 25 anos</h2>
        </div>
      </header>
      <main>
        <div>
          <h2>Modelos em Promoção</h2>
          <p>
            <input type="radio" name="modelo" id="siena" {...register("modelo")}
            value="siena.jfif" />
            <label htmlFor="siena">Fiat Siena</label>
          </p>
          <p>
            <input type="radio" name="modelo" id="strada" {...register("modelo")}
            value="stradavermelho.jfif" />
            <label htmlFor="strada">Fiat Strada</label>
          </p>
          <p>
            <input type="radio" name="modelo" id="pulse" {...register("modelo")}
            value="pulse.jfif" />
            <label htmlFor="pulse">Fiat Pulse</label>
          </p>
        </div>
        <div>
          <img src={watch("modelo")} alt="carro" />
        </div>
        <div>
          <h2>Selecione os opcionais</h2>
          <p>
            <input type="checkbox" id="alarme" 
            {...register("alarme")}/>
            <label htmlFor="alarme">Alarme</label>
          </p>
          <p>
            <input type="checkbox" id="vidros" 
            {...register("vidros")}/>
            <label htmlFor="vidros">Vidros Elétricos</label>
          </p>
        </div>
      </main>
      <footer>
        <h2>Preço do Veiculo R$:{" "} {calcularPreco().toLocaleString("pt-br", {minimumFractionDigits: 2})}</h2>
        <h2><i>* Consulte opções de financiamento</i></h2>
      </footer>
    </>
  );
}

export default App;
