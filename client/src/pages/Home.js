import React, { useContext } from "react";
import { IdContext } from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Log from "../components/log";
import TimeLine from "../components/TimeLine";
import NewPostForm from "../components/Post/NewPostForm";

const Home = () => {
  const id = useContext(IdContext);
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {/* {id ? */} <NewPostForm /> {/* : */}{" "}
          <Log signin={true} signup={false} />
          {/* } */}
        </div>
        <TimeLine />
      </div>
    </div>
  );
};

export default Home;
