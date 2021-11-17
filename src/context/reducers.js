let firstName = localStorage.getItem("personProfile")
  ? JSON.parse(localStorage.getItem("personProfile")).firstName
  : "";
let lastName = localStorage.getItem("personProfile")
  ? JSON.parse(localStorage.getItem("personProfile")).lastName
  : "";
export const initialState = {
  firstName: "" || firstName,
  lastName: "" || lastName,
};

export const UserProfileReducer = (initialState, action) => {
  if (action.type === "Click_Success") {
    return {
      ...initialState,
      ...action.data,
    };
  } else {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
};
