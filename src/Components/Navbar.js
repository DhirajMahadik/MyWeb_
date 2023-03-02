import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar(props) {
  return (
    <Header>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          D <span>M</span>
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li> */}

            {/* <li className="nav-item">
              <Link className="nav-link " to="#contact">
                Contact
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link " to="/portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </Header>
  );
}

export const Header = styled.header`
  position: absolute;
  width: -webkit-fill-available;

  nav {
    background-color: #00000042;

    ul{
      margin: auto;
    }

    .navbar-brand {
      color: #fff;
      font-weight: 800;
      font-style: italic;
      margin-left: 20px;
      font-size: 26px;
      padding: 0;

      span {
        color: #f20f0f;
      }
    }
    .nav-link {
      color: #fff;
      margin: 0px 10px;
      font-weight: 900;
      font-size: 1.1rem;
      :hover {
        color: #f20f0f;
        transform: scale(1.1);
        transition: .5s;
      }
    }
  }
`;
