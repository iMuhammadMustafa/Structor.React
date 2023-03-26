import { Home } from "./NotFound";
import { RouteElement } from "./Routes.Types";
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
];

export default routes;
