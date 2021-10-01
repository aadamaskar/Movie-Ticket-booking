import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import End from "./End";
export default function Logout({ match }) {
  // console.log(match.params.id
  const [arr, setarr] = React.useState(0);
  const [moviename, setmovie] = React.useState("");
  const [movieimage, setimage] = React.useState("");
  const [mul, setMul] = React.useState(0);
  const [txt, setTxt] = React.useState(0);
  const [time, setTime] = React.useState("");
  const [a, seta] = React.useState([
    { time: "10:30 am" },
    { time: "2:30 pm" },
    { time: "6:30 pm" },
    { time: "10:30 pm" },
  ]);
  function getmoviedata() {
    if (match.params.id === "1") {
      setmovie("Soorarai Potru");
      setimage(
        "https://www.socialnews.xyz/wp-content/uploads/2020/08/22/20200822_132614.jpg"
      );
    } else if (match.params.id === "2") {
      setmovie("Master");
      setimage(
        "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Thalapathy-Vijay-s-Master-movie-second-Look-Poster-.jpg?quality=90&zoom=1&ssl=1"
      );
    } else if (match.params.id === "3") {
      setmovie("Asuran");
      setimage(
        "https://i.pinimg.com/736x/80/7b/11/807b11e2446c3ee15ce822ddaad243f1.jpg"
      );
    } else if (match.params.id === "4") {
      setmovie("Viswasam");
      setimage(
        "https://moviegalleri.net/wp-content/uploads/2019/01/Viswasam-Movie-Pongal-2019-Release-Posters.jpg"
      );
    } else if (match.params.id === "5") {
      setmovie("Eswaran");
      setimage(
        "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/10/26/STR-s-Eshwarudu-aks-Eeswaran-movie-first-look-posters-.jpg?fit=853%2C1280&quality=80&zoom=1&ssl=1"
      );
    } else if (match.params.id === "6") {
      setmovie("Kaithi");
      setimage(
        "https://moviegalleri.net/wp-content/gallery/kaithi-movie-release-posters/karthi-kaithi-movie-release-posters-5997d38.jpg"
      );
    }
  }
  useEffect(function () {
    getmoviedata();
  }, []);
  function addcount() {
    setarr(arr + 1);
    setMul((arr + 1) * 100);
    setTxt(arr + 1);
  }
  function lesscount() {
    setarr(arr - 1);
    setMul(mul - 100);
    setTxt(arr - 1);
  }
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "darkslategrey",
      }}
    >
      <div
        style={{
          fontStyle: "italic",
          fontFamily: "cursive",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50vw",
          height: "50vh",
        }}
      >
        <h2>{moviename}</h2>
        <div
          style={{
            display: "flex",
            width: "70%",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <img src={movieimage} width="70%" height="100%" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          width: "50vw",
          height: "50vh",
        }}
      >
        <h4>Book your show timings</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {a.map(function (e) {
            return (
              <div style={{ display: "flex" }}>
                <button
                  onClick={function () {
                    setTime(e.time);
                  }}
                  style={{ marginRight: "10px" }}
                >
                  {e.time}
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <h4>Select number of tickets</h4>
          <input
            style={{ marginRight: "10px", width: "30px", textAlign: "center" }}
            type="text"
            value={arr}
          />
          <button style={{ marginRight: "5px" }} onClick={addcount}>
            +
          </button>
          <button onClick={lesscount}>-</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}></div>
        <h4>You have booked {txt} ticket(s)!!</h4>
        <h4>Total price : {mul}</h4>
        <h4>Show time : {time}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/end"}>
            <button>Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
