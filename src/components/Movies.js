import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

export default function Movies() {
  const [a, seta] = React.useState([
    {
      name: "Soorarai Potru",
      backgroundImage:
        "https://www.socialnews.xyz/wp-content/uploads/2020/08/22/20200822_132614.jpg",
    },
    {
      name: "Master",
      backgroundImage:
        "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Thalapathy-Vijay-s-Master-movie-second-Look-Poster-.jpg?quality=90&zoom=1&ssl=1",
    },
    {
      name: "Asuran",
      backgroundImage:
        "https://i.pinimg.com/736x/80/7b/11/807b11e2446c3ee15ce822ddaad243f1.jpg",
    },
    {
      name: "Viswasam",
      backgroundImage:
        "https://moviegalleri.net/wp-content/uploads/2019/01/Viswasam-Movie-Pongal-2019-Release-Posters.jpg",
    },
    {
      name: "Eeswaran",
      backgroundImage:
        "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/10/26/STR-s-Eshwarudu-aks-Eeswaran-movie-first-look-posters-.jpg?fit=853%2C1280&quality=80&zoom=1&ssl=1",
    },
    {
      name: "Kaithi",
      backgroundImage:
        "https://moviegalleri.net/wp-content/gallery/kaithi-movie-release-posters/karthi-kaithi-movie-release-posters-5997d38.jpg",
    },
  ]);
  return (
    <div style={{ backgroundColor: "black" }}>
      <nav className="smallbox">
        <h1 style={{ marginLeft: "20px" }}>welcome!</h1>
      </nav>
      <div className="main">
        {a.map(function (e, index) {
          return (
            <div style={{ backgroundColor: "lightblue", height: "350px" }}>
              <Link
                to={`/Movies/${index + 1}`}
                style={{ textDecoration: "none" }}
              >
                <img src={e.backgroundImage} width="200px" height="300px" />
                <p style={{ fontSize: "18px", color: "black" }}>{e.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
