import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <header className="portion">
        <nav
          className="navbar  navbar-expand-lg bg-body-tertiary bg-white py-3
            shadow-sm"
        >
          <div className="container-fluid">
            <a
              className="navbar-brand fw-bold fs-4 text-decoration-none"
              href="#"
            >
              BuyFlow
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto gap-5 mb-2 mb-lg-0 list">
                <li className="nav-item">
                  <Link to= '/'>
                  Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-a" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <Link to= '/categories'>
                  Category
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-a" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="buttons">
                <a href="#" className="btn ms-2">
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </a>

                <a href="#" className="btn ms-2">
                  <i className="fa fa-user-plus me-1"></i>
                  Register
                </a>

                <a href="#" className="btn ms-2">
                  <i className="fa fa-shopping-cart me-1"></i>
                  Cart (0)
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};
