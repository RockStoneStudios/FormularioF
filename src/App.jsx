import { useState } from 'react'
import Formulario from './components/Formulario'


console.log(import.meta.env.VITE_BACKEND_URL);
function App() {


  return (
    <div className="flex justify-center bg-gradient-to-tr md:w-full h-100 from-sky-700 to-sky-200">
      <Formulario/>
    </div>
  )
}

export default App
