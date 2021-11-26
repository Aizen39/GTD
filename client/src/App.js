import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import { IdContext } from "./components/AppContext";
import axios from "axios";

const App = () => {
  const [id, setId] = useState(null);


  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API}jwtid`,
        withCredentials:true,

      })
        .then((res) => {
          console.log(res);
          setId(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();
  }, [id]);

  return (
    <IdContext.Provider value={id}>
      <Routes />
    </IdContext.Provider>
  );
};

export default App;