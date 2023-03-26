import { Link, NavLink } from "react-router-dom";

import { RouteElement } from "@/Core/Services/Routing/Routes.Types";
import { getNavBarEndRoutes, getNavBarStartRoutes } from "@/Core/Services/Routing/Routing.Service";

import SideBar, { SideBarToggler } from "./Sidebar/SideBar";

export interface IBaseNavbar {}

const BaseNavbar: React.FC<IBaseNavbar> = () => {
  const startLinks = getNavBarStartRoutes();
  const endLinks = getNavBarEndRoutes();
  return (
    <>
      <NavBarContainer>
        <SideBarToggler />
        <NavBarToggler />
        <NavBarLinksContainer>
          <NavBarStartLinks links={startLinks} />
          <NavBarEndLinks links={endLinks} />
        </NavBarLinksContainer>
      </NavBarContainer>
      <SideBar />
    </>
  );
};

export default BaseNavbar;

function NavBarContainer({ children }: { children: Array<React.ReactNode> }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      <div className="container-fluid">{children}</div>
    </nav>
  );
}
function NavBarToggler() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

function NavBarLinksContainer({ children }: { children: Array<React.ReactNode> }) {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children[0]}</ul>
      <div className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">{children[1]}</ul>
      </div>
    </div>
  );
}

function NavBarStartLinks({ links }: { links: Array<RouteElement> }) {
  return (
    <>
      {links &&
        links.map((route, index) => {
          return (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={route.path} data-testid="navBarStartLink">
                {route.name}
              </NavLink>
            </li>
          );
        })}
    </>
  );
}
function NavBarEndLinks({ links }: { links: Array<RouteElement> }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link me-1" to="/">
          <span className="text-light me-1">{/* <FaUserAlt /> */}</span>
          Hello, user
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/Logout">
          <span className="text-light me-1">{/* <FiLogOut /> */}</span>
          Logout
        </Link>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/Login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/Login" className="nav-link">
          Register
        </NavLink>
      </li>
      {links &&
        links.map((route, index) => {
          return (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" to={route.path} data-testid="navBarEndLink">
                {route.name}
              </NavLink>
            </li>
          );
        })}
    </>
  );
}
