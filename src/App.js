import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInside from "./Signinside/SignInside";
import MainPage from "./MainPage";
import SignUp from "./Signinside/SignUp";
import Profile from "./Profile/Profile";
import CreatePost from "./Createapost/CreatePost";
import ChatBox from "./Chatbox/ChatBox";

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Knex instance'ını oluştur
const knex = require('knex')(require('./knexfile'));

// Route'lar
app.get('/users', async (req, res) => {
  try {
    const users = await knex.select('*').from('users');
    res.json(users);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Server'ı başlat
app.listen(port, () => console.log(`Server listening on port ${port}...`));

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

