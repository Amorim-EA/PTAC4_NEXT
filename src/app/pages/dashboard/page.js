import { getUsers } from "../../functions/handlerAcessAPI";
import './estilo.css';

export default function dashboard(){
    const users = getUsers();
    return(
        <div>
            <h1>Olá Dashboard Aqui</h1>
            <div className="containerMestre">
              {
                users.map(user => {
                    return(<div className="containerUsers">
                         <h3>Nome: <span>{user.nome}</span></h3>
                         <h3>Email: <span>{user.email}</span></h3>
                         <h3>password: <span>{user.password}</span></h3>
                         <h3>password: <span>{user.token}</span></h3>
                     </div>)
                })
               }
            </div>
        </div>
    )
} 