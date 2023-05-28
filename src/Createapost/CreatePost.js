import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./createpost.css";
function CreatePost() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ptel, setPtel] = useState("");
  const [fiyat, setFiyat] = useState("");


  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePtelChange = (event) => {
    setPtel(event.target.value);
  };
  const handleFiyatChange = (event) => {
    setFiyat(event.target.value);
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3001/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          ptel,
          fiyat,
        }),
      });
  
      if (response.ok) {
        // Başarılı kayıt işlemi
        console.log("aaaaa") // Ana sayfaya yönlendirme
      } else {
        // Kayıt hatası
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <div
        className="profilebgimgcontainer"
        style={{
          width: "100%",
          height: "50vh",
          position: "relative",
        }}
      >
        <img
          className="foregroundImg"
          src="https://source.unsplash.com/random/1920x1080/?white"
          alt=""
        ></img>
        <img
          className="backgroundImg"
          src="https://source.unsplash.com/random/1920x1080/?white"
          alt=""
        ></img>
      </div>
      <div
        style={{
          zIndex: "3",
          position: "absolute",
          top: "30%",
          right: "20%",
          border: "none",
          borderRadius: "1.5vw",
          width: "60%",
          height: "55vh",
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div
          style={{
            backgroundRepeat: "no-repeat",
            width: "19vw",
            height: "10vw",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            position: "absolute",
            bottom: "85%",
            left: "37%",
            border: "none",
            borderRadius: "1.5vw",
          }}
        >
          {selectedFile && (
            <img
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                flexShrink: "0",
                maxWidth: "100%",
                maxHeight: "100%",
                border: "none",
                borderRadius: "1.5vw",
              }}
              src={preview}
              alt=""
            />
          )}
        </div>
        <div
          className="details"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            fontSize: "3vh",
          }}
        >
          <table cellSpacing="10">
            <tr>
              <td>İlan Başlığı:</td>
              <td>
                <input type="text" name="title" maxLength={"25"}onChange={handleTitleChange}></input>
              </td>
            </tr>
            <tr>
              <td>İlan Açıklaması:</td>
              <td>
                <input type="text" name="description" maxLength={"25"} onChange={handleDescriptionChange}></input>
              </td>
            </tr>
            <tr>
              <td>Telefon Numarası:</td>
              <td>
                <input type="text" name="ptel" maxLength={"11"} onChange={handlePtelChange}></input>
              </td>
            </tr>
            <tr>
              <td>Fiyat:</td>
              <td>
                <input type="number" name="fiyat" onChange={handleFiyatChange}></input>
              </td>
            </tr>
            <tr>
              <td>İlan Görseli:</td>
              <td
                style={{
                  width: "100%",
                  position: "absolute",
                  top: "81%",
                  left: "42%",
                }}
              >
                <input
                  style={{ width: "15vw" }}
                  type="file"
                  name="file"
                  onChange={onSelectFile}
                />
              </td>
            </tr>
          </table>
        </div>
        <button
          className="createpostbutton"
          style={{ position: "absolute", top: "80%", left: "70%" }}
          onClick={handleCreatePost}
        >
          İlanı Oluştur
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
