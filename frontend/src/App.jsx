import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx"
import SignIn from "./pages/SignIn.jsx"
import Settings from "./pages/Settings.jsx"
import Profile from "./pages/Profile.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} /> 
        <Route path="/signup" element = {<SignUp />} /> 
        <Route path="/signin" element = {<SignIn />} /> 
        <Route path="/settings" element = {<Settings />} /> 
        <Route path="/profile" element = {<Profile />} /> 
      </Routes>
    </div>
  )
}

export default App