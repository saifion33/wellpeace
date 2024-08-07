import VerificationCode from "./Components/Verificationcodepage";
import EnterPassword from "./Components/EnterNewPasspage";
import Loginpage from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signuppage from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="font-ubuntu">
        <Routes>
          <Route path="/verification" element={<VerificationCode />} />
          <Route path="/enter-password" element={<EnterPassword />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
