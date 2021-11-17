export function userProfile(dispatch, data) {
  dispatch({ type: "Click_Success", data });
  localStorage.setItem("personProfile", JSON.stringify(data));
}
