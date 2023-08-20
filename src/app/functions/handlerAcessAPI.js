const usersCadastrados = [
    {
        "nome": 'Erick',
        "email": 'erick@gmail.com',
        "password": 'senha123',
        "token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    },
    {
        "nome": 'Eder',
        "email": 'eder@gmail.com',
        "password": 'senha223',
        "token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    },
    {
        "nome": 'Joao',
        "email": 'joao@gmail.com',
        "password": 'senha133',
        "token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
    },
    ]

const getUserAuthenticated = (user) => {
     let userAuth = null;
     usersCadastrados.forEach(usr => {
        if(usr.email === user.email && usr.password === user.password){
          userAuth =  {
            email: user.email,
            password: user.password
          };
          return;
        }
     })
     return userAuth;
}

const getUsers = () => {
   return usersCadastrados.map(user => {
       return(<div className="containerUsers">
            <h3>Nome: <span>{user.nome}</span></h3>
            <h3>Email: <span>{user.email}</span></h3>
            <h3>password: <span>{user.password}</span></h3>
            <h3>password: <span>{user.token}</span></h3>
        </div>)
    })   
}

export { getUsers, getUserAuthenticated };