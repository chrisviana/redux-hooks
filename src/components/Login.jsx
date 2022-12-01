import { useSelector } from 'react-redux'

function Login() {
    const nomeUsaurio = useSelector(function (state) {
        return state.usuario
    })

    return (
        <div>
            <input type="text"
                value={nomeUsaurio}

            /><br />
            <span>Usuario: {nomeUsaurio}</span>
        </div>
    )
}


export default Login