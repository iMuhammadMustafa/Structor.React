import { useContext, useReducer } from "react";
import { createContext } from "react";

const NotificationsContext = createContext({});

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useReducer((state, action) => {
    switch (action.action) {
      case "ADD":
        action.payload.id = Math.random().toString();
        return [...state, { ...action.payload }];
      case "UPDATE_NOTIFICATION": {
        return [...state.filter(x => (x === x.id) === action.payload.id), action.payload];
      }
      case "REMOVE":
        return state.filter(el => el.id !== action.payload.id);
      case "CLEAR_NOTIFICATION":
        return [];

      default:
        return state;
    }
  }, []);

  return (
    <NotificationsContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationsContext.Provider>
  );
};

const useNotifications = () => {
  const { notifications, setNotifications } = useContext(NotificationsContext);

  return { notifications, setNotifications };
};
export default useNotifications;
