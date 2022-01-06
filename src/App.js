import React, { useState } from "react";
import "./App.css";
import AudioList from "./components/audiolist";
import Filepicker from "./components/filepicker";
import Header from "./components/header";

export default function App() {
  const [file, setFile] = useState(undefined);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clearData = () => {
    setTitle("");
    setDescription("");
    setFile(undefined);
  };
  const onSubmitClick = (e) => {
    e.preventDefault();
    if (title.length == 0) {
      alert("Please Enter Title");
      return;
    }
    if (!/^[a-zA-Z]*$/.test(title)) {
      alert("Please Enter Title in TXT format only ");
      return;
    }
    if (description.length == 0) {
      alert("Please Enter Description");
      return;
    }
    if (!/^[a-zA-Z]*$/.test(description)) {
      alert("Please Enter Description in TXT format only ");
      return;
    }
    if (file === undefined) {
      alert("Please Choose Audio File");
      return;
    }
    alert("Data Saved Successfully.");
    let oldData = localStorage.getItem("posts");
    let doSendData = {
      title: title,
      description: description,
      file: URL.createObjectURL(file),
    };
    if (oldData) {
      let parsedData = JSON.parse(oldData);
      parsedData.push(doSendData);
      localStorage.setItem("posts", JSON.stringify(parsedData));
      console.log("parsedata is", parsedData);
      clearData();
    } else {
      let newData = [];
      newData.push(doSendData);
      console.log("data is", newData);
      localStorage.setItem("posts", JSON.stringify(newData));
      clearData();
    }
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <Header />
        <div className="form-content">
          <form className="form">
            <label>
              Video Title:
              <input
                type="text"
                name="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="name"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <Filepicker
              file={file}
              onfilePicked={(newFile) => {
                setFile(undefined);
                setTimeout(() => {
                  setFile(newFile);
                }, 0);
              }}
            />
            <button onClick={(e) => onSubmitClick(e)}>Submit</button>
          </form>
        </div>
        <AudioList />
      </div>
    </div>
  );
}
