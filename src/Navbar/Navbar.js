import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Search from "./Search";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let navigate = useNavigate();
  const routeChange1 = () => {
    navigate("/profile");
  };
  const routeChange2 = () => {
    navigate("/chat");
  };
  const routeChange3 = () => {
    navigate("/home");
  };
  const routeChange4 = () => {
    navigate("/createpost");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "fixed",
        backgroundColor: "#C6142E",
        width: "100%",
        height: "10vh",
        zIndex: "5",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "60vh",
          height: "10vh",
          backgroundColor: "#C6142E",
          justifyContent: "start",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            backgroundColor: "#C6142E",
            color: "white",
            fontSize: "5vh",
            listStyleType: "none",
            position: "absolute",
            left: "18.5%",
          }}
        >
          <li
            style={{ color: "white", cursor: "pointer", fontWeight: "500" }}
            onClick={routeChange3}
          >
            <li onClick={scrollToTop}>
              <AiOutlineHome />
            </li>
          </li>
        </ul>
      </div>
      <Search />
      <div
        style={{
          backgroundColor: "#F2F3F5",
          width: "89%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ul
          style={{
            height: "10vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
            backgroundColor: "grey",
            color: "black",
            fontSize: "3vh",
            listStyleType: "none",
            gap: "5vh",
            paddingRight: "33vh",
          }}
        >
          <li style={{ cursor: "pointer" }} onClick={routeChange4}>
            <GrAddCircle />
          </li>
          <li style={{ cursor: "pointer" }} onClick={routeChange2}>
            <IoChatboxEllipsesOutline />
          </li>
          <li style={{ cursor: "pointer" }} onClick={routeChange1}>
            <CgProfile />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
