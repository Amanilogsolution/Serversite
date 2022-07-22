import React from "react";
import logo from "./logo.png";

export default function Nav() {
  const logout = () => {
    window.location.href = "/";
  };

  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-black" >
        <div className="container-fluid">
          <img
            className="rounded-circle mx-4"
            src={logo}
            width="60px"
            height="60px"
            style={{ borderRadius: "2px", border: "2.7px solid red" }}
          />
          <a className="navbar-brand">iPeriscope</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/dashboard"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/form">
                  Add-Device
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/table"
                >
                  Table
                </a>
              </li>
            </ul>

            <button
              className="btn btn-outline-info btn-sm"
              type="submit"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
