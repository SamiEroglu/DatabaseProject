import React from "react";
import Navbar from "../Navbar/Navbar";
import "./chatbox.css";
function ChatBox() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(msgbg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        flexShrink: "0",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <div style={{ height: "10vh" }}>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "90vh",
        }}
      >
        <div
          className="sidemessagebox"
          style={{ width: "19%", height: "90vh" }}
        ></div>
        <div
          className="messagebox"
          style={{
            width: "81%",
            height: "90vh",
          }}
        ></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ChatBox;
