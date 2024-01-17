import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./components/pages/Register"
import LoginForm from "./components/pages/Login"
import Home from "./components/pages/Home"
import Blogpage from "./components/pages/Blogpage"
import Profile from "./components/pages/Profile";
import Authorprofile from "./components/pages/Authorprofile";
import Navbar from "./components/pages/header/navbar";
function App() {
  return (
    <div className='App'>
        <Navbar/>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/signup" element={<RegistrationForm/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/blogpage" element={<Blogpage/>} />
                    <Route path="/myprofile" element={<Profile/>} />
                    <Route path="/authorprofile/:author_id" element={<Authorprofile/>} />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
