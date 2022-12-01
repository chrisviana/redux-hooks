import { useState } from "react"
import { Login } from './components/Login';
import { Sidebar } from "./components/Sidebar";

function App() {

  const [usuario, setUsuario] = useState('')
  const logado = usuario === 'chrisviana' ? true : false;

  return (
    <div>
      <Login usuario={usuario} setUsuario={setUsuario} />
      {
        logado && <Sidebar usuario={usuario} />
      }
    </div>
  );
}

export default App;
