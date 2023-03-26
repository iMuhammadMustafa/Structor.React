import { BrowserRouter } from "react-router-dom";

import { getNavBarEndRoutes, getNavBarStartRoutes } from "@/Core/Services/Routing/Routing.Service";
import { render, screen } from "@testing-library/react";

import BaseNavbar from "./BaseNavbar";

describe("NavBar Tests", () => {
  render(
    <BrowserRouter>
      <BaseNavbar />
    </BrowserRouter>
  );

  it("should render active links on start of Navbar", () => {
    const expectedRoutes = getNavBarStartRoutes();
    const renderedElements = screen.queryAllByTestId("navBarStartLink");

    expect(renderedElements.length).toEqual(expectedRoutes.length);
  });

  it("should render active links on end of Navbar", () => {
    const expectedRoutes = getNavBarEndRoutes();
    const renderedElements = screen.queryAllByTestId("navBarEndLink");

    expect(renderedElements.length).toEqual(expectedRoutes.length ?? 0);
  });

  it("should render active links SideBar", () => {
    const expectedRoutes = getNavBarEndRoutes();
    const renderedElements = screen.queryAllByTestId("sideBar");

    expect(renderedElements.length).toEqual(expectedRoutes.length ?? 0);
  });
});
