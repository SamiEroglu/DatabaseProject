import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInside from "./Signinside/SignInside";
import MainPage from "./MainPage";
import SignUp from "./Signinside/SignUp";
import Profile from "./Profile/Profile";
import CreatePost from "./Createapost/CreatePost";
import ChatBox from "./Chatbox/ChatBox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInside />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </Router>
  );
}

export default App;
