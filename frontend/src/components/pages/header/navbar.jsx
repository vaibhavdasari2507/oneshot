export default function Navbar() {
  return (
    <nav className="navbar bg-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: "white" }}>
          InstaBlog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="btn btn-info" style={{ marginRight: "20px" }}>
              <a className="nav-link active" aria-current="page" href="/login">
                Login
              </a>
            </li>
            <li className="btn btn-warning">
              <a className="nav-link active" href="/signup">
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
