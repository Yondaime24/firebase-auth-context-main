import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

const Account = () => {
  const { user, logout } = UserAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user) {
      const starCountRef = ref(db, "users/" + user.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [user]);

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email: {username}</p>

      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Account;
