import { getUsers } from "../../functions/handlerAcessAPI";
import ListarUsuarios from "../../componentes/ListarUsuarios";

export default function dashboard(){
    const users = getUsers();
    return(
        <div>
            <h1>Olá Dashboard Aqui</h1>
            <ListarUsuarios usuarios={users} />
        </div>
    )
} 