import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { signOut } from "firebase/auth";
import { auth } from "./fb-config";
import About from "./Pages/About";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    
    <Router>
      
      <nav>
        <Link to="/">Articles</Link>
        <Link to="/about">About</Link>
        {!isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
    
            <Link to="/createpost">Create Post</Link>
            <Link to="#" onClick={signOutUser}>Logout</Link>
          </>
        )}
      </nav>

      <img className="headImage" src="./Images/604e80e60c813214a0416a5b_01-p-800 (1).png" alt="header" />

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
