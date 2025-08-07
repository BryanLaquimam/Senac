import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-bold text-blue-700'>Pet Avenida - Veterinária</h1>
      <h2 className='text-2xl font-semibold text-blue-500'>Cadastro de Animais para Doação</h2>
    </>
  )
}

export default App
