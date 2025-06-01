import React, { useContext } from "react";
import UserContext from "../COntext/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>User not logged in</h1>;
  return <div>Profile: {user.username}</div>;
};

export default Profile;
