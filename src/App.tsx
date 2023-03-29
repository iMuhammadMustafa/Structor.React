import { BrowserRouter } from "react-router-dom";

import "./App.css";
import BaseNavbar from "./Core/Components/Navbar/BaseNavbar";
import Notification from "./Core/Components/Notifications/Notifications";
import { AuthenticationProvider } from "./Core/Providers/Authentication.Provider";
import { NotificationsProvider } from "./Core/Providers/Notifications.Provider";
import RoutingComponent from "./Core/Services/Routing/RoutingComponent";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <BaseNavbar />
        <NotificationsProvider>
          <Notification />
          <RoutingComponent />
        </NotificationsProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
