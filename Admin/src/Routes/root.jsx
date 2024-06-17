import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header className="shadow-lg">
        <div className="container flex flex-row justify-between
        items-center h-20 mx-auto">
          <h1>Admin</h1>
          <nav>
            <ul className="flex flex-row gap-16">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add-product"}>Add product</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}
