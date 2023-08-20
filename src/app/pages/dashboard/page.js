import { getUsers } from "../../functions/handlerAcessAPI";
import './estilo.css';

export default function dashboard(){
    const users = getUsers();
    return(
        <div>
            <h1>Olá Dashboard Aqui</h1>
            <div className="containerMestre">
              {users}
            </div>
        </div>
    )
} 