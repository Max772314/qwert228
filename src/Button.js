import React from "react";
import "./styles.css";

// let button = document.getElementById("addElement");

// button.addEventListener("click", add);
function add(info) {
  console.log(info);
}
export default function Button(callBack) {
  return (
    <button id="addElement" onClick={add}>
      Add Element
    </button>
  );
}
