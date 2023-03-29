import { createContext, useContext, useReducer } from "react";

export interface IAuthenticationContext {
  state: IAuthenticationState;
  dispatch: React.Dispatch<IAuthenticationAction>;
}

export interface IAuthenticationState {
  isAuthenticated: boolean;
  user: any;
}
export interface IAuthenticationAction {
  type: IAuthenticationActionTypes | string;
  payload?: any;
}
export enum IAuthenticationActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

const initialState: IAuthenticationState = {
  isAuthenticated: false,
  user: null,
};

const AuthenticationReducer = (state: IAuthenticationState, action: IAuthenticationAction) => {
  switch (action.type) {
    case IAuthenticationActionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case IAuthenticationActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthenticationContext = createContext<IAuthenticationContext>({} as IAuthenticationContext);

export const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, initialState);

  return <AuthenticationContext.Provider value={{ state, dispatch }}>{children}</AuthenticationContext.Provider>;
};

const useAuthentication = () => {
  const { state, dispatch } = useContext(AuthenticationContext);
  return { state, dispatch };
};

export default useAuthentication;
