import { NextResponse } from "next/server";
import { validateToken} from "./app/functions/validateToken";

export const middleware = (request) => {
  const token = request.cookies.get('token')?.value;
  const urlLogin = new URL('/', request.url);

  const isTokenValidated = validateToken(token);
  
  if(!isTokenValidated || Itoken){ 
    if(request.nexturl.pathname === '/pages/dashboard'){ 
       return NextResponse.redict(urlLogin);
    } 
  }
  NextResponse.next();
};

export const config = {
matcher: ["/", "/pages/private"]
}