import { useSelector } from "react-redux"
import { useAuthStore } from "../../hooks/useAuthStore"

export const NavBar = () => {

  // const {user} = useSelector(state => state.auth);
  const { user, startLogout } = useAuthStore();


  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        {user.name}
        
      </span>

      <button 
      className="btn btn-outline-danger"
      onClick={startLogout}
      >
        <span>
          <i className="fas fa-sign-out-alt mr-2"></i>
          Salir
        </span>
      </button>
    </div>
  )
}
