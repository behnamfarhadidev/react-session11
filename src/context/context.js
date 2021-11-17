import { createContext, useContext, useReducer } from "react";
import { UserProfileReducer, initialState } from "./reducers";
const UserProfileStateContext = createContext();
const UserProfileDispatchContext = createContext();

export function useProfileState() {
  return useContext(UserProfileStateContext);
}

export function useProfileDispatch() {
  return useContext(UserProfileDispatchContext);
}

export const UserProfileProvider = ({ children }) => {
  const [user, dispatch] = useReducer(UserProfileReducer, initialState);
  return (
    <UserProfileStateContext.Provider value={user}>
      <UserProfileDispatchContext value={dispatch}>
        {children}
      </UserProfileDispatchContext>
    </UserProfileStateContext.Provider>
  );
};
