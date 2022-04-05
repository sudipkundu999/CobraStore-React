import { useState } from "react";
import { useAuth } from "../contexts";
import "./pages-css/user.css";

export const User = () => {
  const { userData } = useAuth();
  const [togglePass, setTogglePass] = useState(false);
  const togglePassView = () => setTogglePass((x) => !x);

  return (
    <main className="user-main">
      <h1>User Profile</h1>
      <div className="profile-details-wrapper">
        <h2 className="profile-heading">Profile Details</h2>
        <div className="avatar avatar-l">
          {userData.firstName.charAt(0) + userData.lastName.charAt(0)}
        </div>
        <div className="profile-details">
          <ul className="list-heading">
            <li>First Name :</li>
            <li>Last Name :</li>
            <li>Email :</li>
            <li>Password :</li>
          </ul>
          <ul className="list-content">
            <li>{userData.firstName}</li>
            <li>{userData.lastName}</li>
            <li>{userData.email}</li>
            <li>
              {togglePass
                ? userData.password
                : [...userData.password].map(() => "*")}
              <div className="eye-btn">
                {togglePass ? (
                  <i className="fas fa-eye-slash" onClick={togglePassView} />
                ) : (
                  <i className="fas fa-eye" onClick={togglePassView} />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
