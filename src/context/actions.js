export function userProfile(dispatch, data) {
  dispatch({ type: "Click_Success", data });
  localStorage.setItem("PersonProfile", JSON.stringify(data));
}
