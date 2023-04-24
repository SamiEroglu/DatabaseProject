import React from "react";
import "./postpage.css";
function PostPage() {
  return (
    <div className="postpagecontainer">
      <div>
        <div className="posts">
          <div className="postexample">
            <div
              style={{
                height: "15vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            >
              <img
                style={{ flexShrink: "0", maxWidth: "100%", minHeight: "100%" }}
                src="ilanimg.jpg"
                alt=""
              ></img>
            </div>
            <h1
              style={{
                height: "4vh",
                paddingLeft: "10px",
                paddingRight: "10px",
                blockSize: "fit-content",
                wordWrap: "break-word",
                fontSize: "1.2vw",
              }}
            >
              İlanBaşlığıİlanBaşlığıİlan
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "6vh",
                padding: "5px",
                gap: "0.6vw",
              }}
            >
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  paddingLeft: "5px",
                }}
              >
                <img
                  style={{
                    flexShrink: "0",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "100%",
                  }}
                  src="ppicon.png"
                  alt=""
                ></img>
              </div>
              <div
                style={{
                  width: "70%",
                  blockSize: "fit-content",
                  wordWrap: "break-word",
                }}
              >
                açıklamaaçıklamaaçıklamaaçıklamaaçıklamaaçıklamaaçıklamaaçıklamaaçıklamaaçı
              </div>
            </div>
            <div
              style={{
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5vw",
                fontWeight: "700",
              }}
            >
              10000₺
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
