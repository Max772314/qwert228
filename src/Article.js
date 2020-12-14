import React from "react";
import "./styles.css";

export default function Article({ title, descript }) {
  return (
    <div className="Art">
      <h3>{title || "title"}</h3>
      <p>{descript || "descript"}</p>
    </div>
  );
}
