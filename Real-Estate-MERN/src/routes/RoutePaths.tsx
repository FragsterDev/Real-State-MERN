import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignOut from "../pages/SignOut";
import Header from "../components/header";

function RoutePaths() {
  return <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signout" element={<SignOut/>}/>
    </Routes>
  </BrowserRouter>
}

export default RoutePaths