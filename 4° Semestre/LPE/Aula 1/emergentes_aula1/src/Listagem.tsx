import { useEffect, useState } from "react"
import type { Viagem } from "./utils/viagemType"

export default function Listagem() {
    const [viagens, setViagens] = useState<Viagem[]>([])

    useEffect(() => {
        const dados = localStorage.getItem("viagens")
        if (dados) {
            setViagens(JSON.parse(dados))
        }
    }, [])

    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-gray-100 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Viagens Cadastradas</h3>
            </div>
            {viagens.length == 0 ? (
                <p>Nenhuma viagem cadastrada.</p>
            ) : (
                <ul className="space-y-4">
                    {viagens.map((viagem, i) => (
                        <li key={i} className="bg-white p-4 rounded shadow">
                            <p><strong>Destino:</strong> {viagem.destino}</p>
                            <p><strong>Data de saída:</strong> {viagem.dataSaida}</p>
                            <p><strong>Preço:</strong> R$ {Number(viagem.preco).toFixed(2)}</p>
                            <p><strong>Roteiro:</strong> {viagem.roteiro}</p>
                            {viagem.urlImagem && (
                                <img src={viagem.urlImagem} alt={`Imagem de ${viagem.destino}`} className="mt-2 w-full rounded" />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}