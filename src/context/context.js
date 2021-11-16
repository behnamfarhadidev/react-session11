import { createContext, useContext, useReducer } from "react";
import { initialState, UserProfileReducer } from "./reducers";
const UserProfileStateContext = createContext();
const UserProfileDispatchContext = createContext();

export function useProfileState() {
  const context = useContext(UserProfileStateContext);
  return context;
}

export function useProfileDispatch() {
  const context = useContext(UserProfileDispatchContext);
  return context;
}

export const UserProfileProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserProfileReducer, initialState);
  return (
    <UserProfileStateContext.Provider value={user}>
      <UserProfileDispatchContext.Provider value={dispatch}>
        {children}
      </UserProfileDispatchContext.Provider>
    </UserProfileStateContext.Provider>
  );
};
