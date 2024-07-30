import VerificationCode from "./Components/Verificationcodepage";
import EnterPassword from "./Components/EnterNewPasspage";
import Loginpage from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signuppage from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import BothPass from "./Components/BothPassDoesn't";
function App() {
  return (
    <Router>
      <div className="font-ubuntu">
        <Routes>
          <Route path="/verification" element={<VerificationCode />} />
          <Route path="/enter-password" element={<EnterPassword />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/both-pass" element={<BothPass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
