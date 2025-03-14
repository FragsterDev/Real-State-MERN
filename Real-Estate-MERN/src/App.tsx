import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Profile = lazy(() => import("./pages/Profile"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignOut = lazy(() => import("./pages/SignOut"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signout" element={<SignOut/>}/>
          </Route>
          
          <Route path="*" element={<p className="text-2xl text-center">404 Not Found</p>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App