// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = "", action) {
    switch (action.type) {
        case 'VALIDAR_USUARIO':
            return action.payload === 'chrisviana' ? 'chrisviana' : 'Usuario não encontrado'
        default:
            return state
    }
} 