import { decode } from "jsonwebtoken"; 

const validateToken = async (token) => { 
  const isTokenValidate = decode(token); 
  if(!isTokenValidate){
    return !token;
  }
  return !!token;
}

export { validateToken };