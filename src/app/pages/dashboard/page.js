import { getUsers } from "../functions/handlerAcessAPI";

export default function dashboard(){
    const users = getUsers();
    return(
        <div>
            <h1>Olá Dashboard Aqui</h1>
            {users}
        </div>
    )
} 