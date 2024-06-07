import { useState } from "react"
import Perfil from "./components/Perfil/Index.jsx"
import Formulario from "./components/Formulario/Index.jsx"
import RepostList from "./components/ReposList/index.jsx";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 &&(
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <RepostList nomeUsuario={nomeUsuario} />      
      </>
    )}
    
    
        {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button"> Toggle form</button> */}
    </>
  )
}

export default App
