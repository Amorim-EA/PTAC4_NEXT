import { handlerAcessUser } from "../../functions/handlerAcess";
import { useRouter } from "next/navigation";

export default function Login(){
  const { push } = useRouter();
  const handlerLogin = (e) => {
    e.preventDefault();
    handlerAcessUser();
    push("../../Home");
}
  return ( 
    <div>
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <input
          placeholder="E-mail"
          type="email"
          onChange={(e) => { setEmail(e.target.value) }}>
        </input>
        <input 
          placeholdset"Senha"
          type="password"
          onChange={(e) => { setPassword(e.target.value) }}>
        </input>
        <button>Entrar</button>
      </form>
    </div>
  )
}