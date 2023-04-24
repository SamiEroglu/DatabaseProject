import React from "react";
import Navbar from "./Navbar/Navbar";
import PostPage from "./Postpage/PostPage";
import "./Styles/mainpage.css";

function MainPage() {
  return (
    <div className="mainpagecontainer">
      <div style={{ width: "100%", height: "20vh" }}>
        <Navbar />
      </div>
      <div style={{ width: "80%", height: "80vh" }}>
        <PostPage />
      </div>
    </div>
  );
}

export default MainPage;
