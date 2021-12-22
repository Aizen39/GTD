import React, { useContext } from "react";
import { IdContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import NewPostForm from "../components/Post/NewPostForm";
import Log from "../components/log";
import Friends from "../components/Profil/Friends";
import TimeLine from "../components/TimeLine";

const Home = () => {
  const uid = useContext(IdContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <TimeLine />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">{uid && <Friends />}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
