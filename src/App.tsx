import { BrowserRouter } from "react-router-dom";

import "./App.css";
import BaseNavbar from "./Core/Components/Navbar/BaseNavbar";
import { AuthenticationProvider } from "./Core/Providers/Authentication.Provider";
import RoutingComponent from "./Core/Services/Routing/RoutingComponent";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <BaseNavbar />
        <RoutingComponent />
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
