
export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp;
        Agustín
      </span>

      <button className="btn btn-outline-danger">
        <span>
          <i className="fas fa-sign-out-alt mr-2"></i>
          Salir
        </span>
      </button>
    </div>
  )
}
