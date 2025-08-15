<<<<<<< HEAD
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-bold text-blue-700'>Pet Avenida - Veterinária</h1>
      <h2 className='text-2xl font-semibold text-blue-500'>Cadastro de Animais para Doação</h2>
    </>
=======
import './App.css'
import Titulo from './components/Titulo'


function App() {
  return (
    <div className='text-center'>
      <Titulo />
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Pet Avenida - Veterinária</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Cadastro de Animais para Doação - Encontre aqui o seu!</p>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Learn more
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
    </div>
>>>>>>> 0dffc5772fda8c25016cb851017901f7497dd4db
  )
}

export default App
