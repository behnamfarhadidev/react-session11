let firstName = localStorage.getItem("personProfile")
  ? JSON.parse("personPorfile").firstName
  : "";
let lastName = localStorage.getItem("personProfile")
  ? JSON.parse("personProfile").lastName
  : "";
export const initialState = {
  firstName: "" || firstName,
  lastName: "" || lastName,
};

export const UserProfileReducer = (action, initialState) => {
  if (action.type === "Click_Success") {
    return {
      ...initialState,
      ...action.data,
    };
  } else {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
};
