import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./core/pages/HomePage/HomePageWrapper";
import About from "./core/pages/About/About";
import Profile from "./core/pages/Profile/Profile";
import SignIn from "./core/pages/SignIn/SignIn";
import SignUp from "./core/pages/SignIn/SignUp/SignUp";
import SignOut from "./core/pages/SignOut/SignOut";
import Header from "./common/header";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="*" element={<p className="text-2xl text-center">404 Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
