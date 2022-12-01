// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = "banana", action) {
    switch (action.type) {
        case 'VALIDAR_USUARIO':
            return action.payload === 'chrisviana' ? true : false
        default:
            return state
    }
} 