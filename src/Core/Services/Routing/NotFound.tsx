import useAuthentication from "@/Core/Providers/Authentication.Provider";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home?</p>
        <TestContext />
      </header>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Not Found</p>
      </header>
    </div>
  );
}
export function TestContext() {
  const { state, dispatch } = useAuthentication();
  return (
    <>
      <p>{state.isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
      <p>{state.user ? state.user.name : "No User"}</p>
      <button onClick={() => dispatch({ type: "LOGIN", payload: { name: "Test" } })}>Login</button>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
    </>
  );
}
