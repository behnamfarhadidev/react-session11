export const initialState = {
  firstName: "",
  lastName: "",
};

export const UserProfileReducer = (initialState, action) => {
  switch (action.type) {
    case "Click_Success":
      return {
        ...initialState,
        firstName: action.data.firstName,
        lastName: action.data.lastName,
      };
    default:
      break;
  }
};
