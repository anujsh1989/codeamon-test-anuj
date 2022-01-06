import axios from "axios";
import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Avatar: "",
  });

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((resp) => {
        const name = resp.data.data.first_name + " " + resp.data.data.last_name;
        const email = resp.data.data.email;
        const avatar = resp.data.data.avatar;
        setData({
          Name: name,
          Email: email,
          Avatar: avatar,
        });
      })
      .catch((err) => {
        console.log("err is", err);
      });
  });

  return (
    <div className="form-header">
      <div className="form-header-pp">
        <img src={data.Avatar} alt="pp" />
      </div>
      <div className="form-header-details">
        <h4>{data.Name}</h4>
        <p>{data.Email}</p>
      </div>
    </div>
  );
}
