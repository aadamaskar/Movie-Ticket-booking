import React from "react";
import Movies from "./Movies";
import "./Style.css";
import { Link, useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  const [name, setName] = React.useState([]);
  const [str, setStr] = React.useState("");
  const [str1, setStr1] = React.useState("");
  function addUsername(e) {
    setStr(e.target.value);
  }
  function Username() {
    setName(function (arr) {
      const tempArr = [...arr];
      tempArr.push(str);
      return tempArr;
    });
  }
  function addPassword(e) {
    setStr1(e.target.value);
  }
  function Password() {
    setName(function (arr) {
      const tempArr = [...arr];
      tempArr.push(str1);
      return tempArr;
    });
  }
  function validate() {
    if (str === "Incresco" && str1 === "12345") {
      history.push("/Movies");
    } else {
      setStr("");
      setStr1("");
    }
  }
  return (
    <div className="Style">
      <div
        style={{
          margin: "190px",
          fontSize: "30px",
          fontFamily: "cursive",
          color: "mintcream",
          width: "20%",
        }}
      >
        <h2>Ticket-Sy</h2>
        <div
          style={{
            fontStyle: "italic",
            fontFamily: "cursive",
            fontSize: "20px",
          }}
        >
          <p>User Name</p>
          <input type="text" value={str} onChange={addUsername} />
          <p>Password</p>
          <input type="password" value={str1} onChange={addPassword} />

          <div style={{ marginTop: "20px" }}>
            <button onClick={validate}>login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
