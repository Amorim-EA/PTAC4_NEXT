import './estilo.css';

const ListarUsuarios = ({usuarios}) => {
    return(
        <div className="containerMestre">
              {
                usuarios.map(user => {
                    return(<div className="containerUsers">
                         <h3>Nome: <span>{user.nome}</span></h3>
                         <h3>Email: <span>{user.email}</span></h3>
                         <h3>password: <span>{user.password}</span></h3>
                         <h3>password: <span>{user.token}</span></h3>
                     </div>)
                })
               }
            </div>
    )
}

export default ListarUsuarios;