import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./components/pages/Register"
import LoginForm from "./components/pages/Login"
import Home from "./components/pages/Home"


function App() {
  return (
    <div className='App'>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/signup" element={<RegistrationForm/>} />
                    <Route path="/login" element={<LoginForm/>} />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
