import { createContext, useContext, useReducer } from "react";

interface IAuthenticationContext {
  user: any;
  Login: (user: any) => void;
  Logout: () => void;
}

interface IAuthenticationState {
  isAuthenticated: boolean;
  user: any;
}
interface IAuthenticationAction {
  type: string;
  payload: any;
}
const initialState = {
  isAuthenticated: false,
  user: null,
};

const AuthenticationReducer = (state: IAuthenticationState, action: IAuthenticationAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthenticationContext = createContext({ initialState, AuthenticationReducer });

export const AuthenticationProvider = ({ children }: { children: Array<React.ReactNode> }) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, initialState);

  return <AuthenticationContext.Provider value={{ state, dispatch }}>{children}</AuthenticationContext.Provider>;
};

const useAuthentication = () => {
  const { state, dispatch } = useContext(AuthenticationContext);
  return { state, dispatch };
};

export default useAuthentication;
