import { useForm } from "react-hook-form"
import type { Viagem } from "./utils/viagemType"

export default function Inclusao() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Viagem>()

  function onSubmit(data: Viagem) {
    const dados = localStorage.getItem("viagens")
    let grava: Viagem[]

    if (dados) {
      const todas: Viagem[] = JSON.parse(dados)
      grava = [...todas, data]
    } else {
      grava = [data]  
    }

    localStorage.setItem("viagens", JSON.stringify(grava))
    reset()
  }

  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Cadastrar Viagem</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Destino</label>
          <input
            {...register("destino", { required: "Destino obrigatório" })}
            className="w-full border rounded px-3 py-2"
            placeholder="Ex: Paris"
          />
          {errors.destino && <span className="text-red-500 text-sm">{errors.destino.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Data de saída</label>
          <input
            type="date"
            {...register("dataSaida", { required: "Data de saída obrigatória" })}
            className="w-full border rounded px-3 py-2"
          />
          {errors.dataSaida && <span className="text-red-500 text-sm">{errors.dataSaida.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Preço (R$)</label>
          <input
            type="number"
            step="0.01"
            {...register("preco", { required: "Preço obrigatório", min: 0 })}
            className="w-full border rounded px-3 py-2"
            placeholder="Ex: 2000.00"
          />
          {errors.preco && <span className="text-red-500 text-sm">{errors.preco.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Roteiro</label>
          <textarea
            {...register("roteiro", { required: "Roteiro obrigatório" })}
            className="w-full border rounded px-3 py-2"
            rows={3}
            placeholder="Descreva o roteiro"
          />
          {errors.roteiro && <span className="text-red-500 text-sm">{errors.roteiro.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">URL da imagem</label>
          <input
            {...register("urlImagem", {
              required: "URL obrigatória",
              pattern: { value: /^https?:\/\//, message: "Insira uma URL válida" }
            })}
            className="w-full border rounded px-3 py-2"
            placeholder="Ex: https://..."
          />
          {errors.urlImagem && <span className="text-red-500 text-sm">{errors.urlImagem.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}