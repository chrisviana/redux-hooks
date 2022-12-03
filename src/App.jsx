import Login from './components/Login';
import { useSelector } from 'react-redux'
import { Sidebar } from "./components/Sidebar";

function App() {
  const nomeUsaurio = useSelector(function (state) {
    return state.usuario
  })

  const logado = nomeUsaurio === 'chrisviana' ? true : false

  return (
    <div>
      <Login />
      {
        logado && <Sidebar />
      }
    </div>
  );
}

export default App;
