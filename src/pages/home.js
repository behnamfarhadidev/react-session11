import { Link } from "react-router-dom";
import { userProfile } from "../context/actions";
import { useProfileDispatch } from "../context/context";
function Home() {
  const dispatch = useProfileDispatch();
  const userProfileData = { firstName: "behnam", lastName: "farhadi" };
  function handleUserProfile() {
    userProfile(dispatch, userProfileData);
  }
  return (
    <div>
      <button onClick={handleUserProfile}>Click Me</button>
      <Link to="/profile">Go to the next page</Link>
    </div>
  );
}

export default Home;
