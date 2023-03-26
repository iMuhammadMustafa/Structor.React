import { BrowserRouter } from "react-router-dom";

import "./App.css";
import BaseNavbar from "./Core/Components/Navbar/BaseNavbar";

function App() {
  return (
    <BrowserRouter>
      <BaseNavbar>
        <div className="App">Hello</div>;
      </BaseNavbar>
    </BrowserRouter>
  );
}

export default App;
