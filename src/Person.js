import React from "react";
import "./styles.css";

export default function Person({ name, age, education }) {
  return (
    <div>
      <h2>{name || "name"}</h2>
      <h2>{age || "age"}</h2>
      <h2>{education || "education"}</h2>
    </div>
  );
}
