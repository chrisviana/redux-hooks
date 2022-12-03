import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { validarUsuario } from '../store/Usuario/usuario.action'
function Login() {

    const dispatch = useDispatch()
    const nomeUsaurio = useSelector(function (state) {
        return state.usuario
    })

    const [usuario, setUsuario] = useState('')

    return (
        <div>
            <input type="text"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
            />
            <button onClick={() => dispatch(validarUsuario(usuario))}>Validar Usuario</button>
            <br />
            <span>Usuario: {nomeUsaurio}</span>
        </div>
    )
}


export default Login