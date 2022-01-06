import React, { useState } from "react";

export default function Filepicker(props) {
  //   const [file, setFile] = useState(undefined);

  return (
    <div>
      <input
        type="file"
        accept=".mp3"
        id="file-selector"
        onChange={(e) => {
          if (e.target.files.length > 0) {
            props.onfilePicked(e.target.files[0]);
          }
          //   if (e.target.files.length > 0) {
          //     setFile(undefined);
          //     setTimeout(() => {
          //       //   setFile(e.target.files[0]);
          //     }, 0);
          //   }
        }}
      />
      {props.file !== undefined && (
        <audio controls>
          <source
            src={URL.createObjectURL(props.file)}
            type={props.file.type}
          />
        </audio>
      )}
    </div>
  );
}
