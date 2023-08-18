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
            password: user.password,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
          };
          return;
        }
     })
     return userAuth;
}

const getUsers = () => {
   usersCadastrados.map(user => {
       return(<div>
            <h3>Nome: {user.nome}</h3>
            <h3>Email: {user.email}</h3>
            <h3>password: {user.password}</h3>
        </div>)
    })   
}

export { getUsers, getUserAuthenticated };