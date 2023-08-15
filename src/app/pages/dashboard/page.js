import { getUsers } from "@/app/functions/handlerAcessAPI";

export default function Dashboad(){
    return(
        <div>
            <h1>Olá Dashboard Aqui</h1>
            <p>{getUsers()}</p>
        </div>
    )
} 