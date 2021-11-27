import React /* , { useContext }  */ from "react";
import Log from "../components/log";
//import { IdContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  //const id = useContext(IdContext);

  return (
    <div className="profil-page">
      <UpdateProfil />

      <div className="log-container">
        <Log signin={false} signup={true} />
        <div className="img-container">
          <img src="./img/mew.svg" alt="img-log" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
