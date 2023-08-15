import Cookies from "js-cookie"; 
import { validateToken } from "./validateToken";

const handlerAcessUser = async (user) => { 
  /*const data = await fetch('http://localhost:3003/autheticate', { 
      method: 'POST', 
      body: JSON.stringify(user)
    });
const responseTsUserAtuh = await data.json();*/
  
  const responseIsUserAtuh = {
      name: "Marcelino",
      email: "marcelino@teste.com",
      token: 'eyJhbGci0iJIUzI1NiIsInR5cC161kpXVC39.eyJzdW1iOiIxMjMONTY30DkwIiwit
  }
  const isTokenValidate = validateToken(responseIsUserAtuh.token);
  if(isTokenValidate){
    Cookies.set('token', responseIsUserÄtuh.token);
  }
}

export { handlerAcessUser };