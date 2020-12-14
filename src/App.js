import React from "react";
import "./styles.css";
import Article from "./Article";
import Button from "./Button";
import Person from "./Person";
import ButtonTwo from "./ButtonTwo";
let arrOfData = [
  {
    title: "11",
    descript: "12"
  },
  {
    title: "21",
    descript: "22"
  },
  {
    title: "31",
    descript: "32"
  }
];

// function tessst() {
//   let qq = [];
//   for (let i = 0; i < arrOfData.length; i++) {
//     qq.push(<Article {...arrOfData[i]} />);
//   }
//   return qq;
// }

let list = arrOfData.map((item) => <Article {...item} />);

// let infoPerson = [
//   {
//     name: "Alexandro",
//     age: "30",
//     education: "KPI"
//   }
// ];

let infoPerson = [
  {
    name: "Alexandro",
    age: "30",
    education: "KPI"
  }
];

function add() {
  console.log("info");
}

let person = infoPerson.map((item) => <Person {...item} />);

export default function App() {
  return (
    <div className="App">
      {/* {tessst()} */}
      {/* {list} */}
      <Button />
      <ButtonTwo title="Click" callBack={add} />
      {person}
    </div>
  );
}
