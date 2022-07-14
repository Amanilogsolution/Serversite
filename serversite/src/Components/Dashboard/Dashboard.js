import React from "react";
import logo from "./logo.png";

export default function Dashboard() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <img
            className="rounded-circle mx-4"
            src={logo}
            width="60px"
            height="60px"
            style={{ borderRadius: "2px", border: "2.7px solid red" }}
          />
          <a className="navbar-brand" href="/">
            AWL India
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-info btn-sm" type="submit">
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className='row' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            <div className="card mx-4 my-4 bg-secondary text-light  " style={{width: "18rem"}}>
                
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            
            
            <div className="card mx-4 my-4 bg-secondary text-light " style={{width: "18rem"}}>
               
                <div className="card-body">
                    <h5 className="card-title" style={{backgroundColor:"silver",color:"black",borderRadius:'6px',padding:"0 6px"}}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-info btn-sm">Go somewhere</a>
                </div>
            </div>
            </div>

      <div className="card text-center" >
        <div className="card-header bg-dark text-light">Featured</div>
        <div className="card-body bg-secondary">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div className="card-footer bg-dark text-light">2 days ago</div>
      </div>
    </div>
  );
}
