import Login from "@/Features/Users/Login.page";
import Register from "@/Features/Users/Register.page";

import { Home } from "./NotFound";
import { NAVBAR_END, RouteElement } from "./Routes.Types";
import { NAVBAR, NAVBAR_START, SIDEBAR } from "./Routes.Types";

const routes: Array<RouteElement> = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    order: 100,
    dist: [{ name: NAVBAR, align: NAVBAR_START }, { name: SIDEBAR }],
    requireAuthentication: false,
    isActive: true,
  },
  {
    name: "Login",
    path: "/Login",
    component: <Login />,
    order: 100,
    dist: [{ name: SIDEBAR }],
    requireAuthentication: false,
    isActive: true,
  },
  {
    name: "Register",
    path: "/Register",
    component: <Register />,
    order: 100,
    dist: [{ name: SIDEBAR }],
    requireAuthentication: false,
    isActive: true,
  },
];

export default routes;
