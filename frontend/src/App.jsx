import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Settings from "./pages/Settings.jsx";
import Profile from "./pages/Profile.jsx";
import Navbar from "./components/Navbar.jsx";
import { useAuthStore } from "./zustand/useAuthStore.js";
import { useEffect } from "react";
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"


const App = () => {
  const { authUser, checkingAuthentication ,isCheckingAuthentication } = useAuthStore();
  useEffect(() => {
    checkingAuthentication();
  }, [checkingAuthentication]);

  console.log({ authUser });

  if(isCheckingAuthentication && !authUser){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-12 animate-spin"/>
      </div>
    )
  }



  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to = "/signin" />} />
        <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to = "/" />} />
        <Route path="/signin" element={ !authUser ? <SignIn /> : <Navigate to = "/" />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={ authUser ? <Profile /> : <Navigate to = "/signin" />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
