import { AlterarUsuario } from "./AlterarUsuario";

export function Sidebar({ usuario }) {
    return (
        <div>
            SideBar<br />
            <AlterarUsuario usuario={usuario} />
        </div>
    )
}