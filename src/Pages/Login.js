import React from "react";
import { auth, provider } from "../fb-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInHandler = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/")
    });
  };
  return (
    <div className="loginPage">
      <p>Sign In to Continue</p>
      <button className="login-with-google-btn" onClick={signInHandler}>Sign In With Google</button>
    </div>
  );
}

export default Login;
