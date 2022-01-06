import React, { useEffect, useState } from "react";
import "./audiolist.css";

export default function AudioList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let posts = localStorage.getItem("posts");
    if (posts) {
      let parsedData = JSON.parse(posts);
      setListData([...parsedData]);
    }
  }, [localStorage.posts]);
  console.log("list datais", listData);

  return (
    <div className="al-wrapper">
      <div className="al-wrapper-header">
        <h5>*Uploaded Files*</h5>
      </div>
      <div className="al-content">
        {listData.map((item, index) => {
          return (
            <div key={index.toString} className="al-list-item">
              <div className="al-list-item-left">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
              <audio controls>
                <source src={item.file} type={item.file.type} />
              </audio>
            </div>
          );
        })}
      </div>
    </div>
  );
}
