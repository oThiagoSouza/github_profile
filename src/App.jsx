import { useState } from "react"
import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioAtivo, setFormularioAtivo] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      {/* {formularioAtivo && (
        <Formulario />
      )}
      <button type="button" onClick={() => setFormularioAtivo(!formularioAtivo)} >toggle form</button> */}
    </>
  )
}

export default App
