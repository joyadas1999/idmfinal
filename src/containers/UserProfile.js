import React from "react";

import UserProfileComponent from "../components/UserProfileComponent";

function UserProfile({ userInformation }) {
  return (
    <div>
      <h1>Drainer Profile</h1>
      <UserProfileComponent userInformation={userInformation} />
      <h2>Make your Drain Post here:</h2>
      <form className="Drain">
        <label htmlFor="createEmail">Post</label>
        <input type="email" name="createEmail" />

        <button>Submit</button>
      </form>
    </div>
  );
}
export default UserProfile;
