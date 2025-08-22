import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const { register, handleSubmit, reset, setFocus } = useForm()
  const [resposta, setResposta] = useState()
  const [calculo, setCalculo] = useState()

  function calculaPrato(data) {
    //alert(data.nome + " - " + data.peso)
    setResposta(`${data.nome}, você serviu um prato com ${data.peso} gr.`)
    const total = (Number(data.peso) / 1000) * 72
    setCalculo(`Total do Prato R$: ${total.toLocaleString("pt-br", { minimumFractionDigits: 2 })}`)
  }

  function limpaDados() {
    setFocus("nome")
    reset({
      nome: "",
      peso: ""
    })
    setResposta("")
    setCalculo("")
  }
  //hook define o que será executado ao renderizar o componente
  useEffect(() => {
    setFocus("nome")
  }, [])

  return (
    <div className='cor-destaque'>
      <h1>Restaurante Avenida</h1>
      <h2>Calculo dos valores das Refeições</h2>
      <img src="./images (1).jfif" alt="" className='figura' />
      <form onSubmit={handleSubmit(calculaPrato)} onReset={limpaDados}>
        <p>
          <label htmlFor="nome">Nome do Cliente: </label>
          <input type="text" id="nome" className='campos'
            required
            {...register("nome")} />
        </p>
        <p>
          <label htmlFor="peso">Peso do Prato (gr): </label>
          <input type="number" id="peso" className='campos'
            required
            {...register("peso")} />
        </p>
        <input type="submit" value="Calcular" className='btn btn-submit' />
        <input type="reset" value="Limpar" className='btn btn-reset' />
      </form>
      <h2>{resposta}</h2>
      <h2>{calculo}</h2>
    </div >
  )
}

export default App
