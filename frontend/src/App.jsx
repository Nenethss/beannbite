import "./App.css";
import "./antdesign.css";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
  return (
    <div className="w-full h-screen font-inter ">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
