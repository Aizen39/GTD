import React from "react";
import LeftNav from "../components/LeftNav";
import TimeLine from "../components/TimeLine";

const home = () => {
  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <TimeLine />
      </div>
    </div>
  );
};

export default home;
