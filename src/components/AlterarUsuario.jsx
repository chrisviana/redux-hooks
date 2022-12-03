import { useSelector } from 'react-redux'

export function AlterarUsuario() {

    const nomeUsaurio = useSelector(function (state) {
        return state.usuario
    })

    return (
        <div>
            AlterarUsuario: {nomeUsaurio}
        </div>
    )
}