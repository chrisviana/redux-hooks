export function Login({ usuario, setUsuario }) {
    return (
        <div>
            <input type="text"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
            /><br />
            <span>Usuario: {usuario}</span>
        </div>
    )
}