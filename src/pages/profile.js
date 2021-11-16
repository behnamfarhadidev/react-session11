import { useProfileState } from "../context/context";

function Profile() {
  const userData = useProfileState();
  return (
    <div>
      <p>{userData.firstName}</p>
      <p>{userData.lastName}</p>
    </div>
  );
}

export default Profile;
