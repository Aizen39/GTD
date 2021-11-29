import React, { useEffect, useState } from "react";
import Routes from "./components/routes";
import { IdContext } from "./components/AppContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => {
          console.log(res);
          setId(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (id) dispatch(getUser(id));
  }, [id, dispatch]);

  return (
    <IdContext.Provider value={id}>
      <Routes />
    </IdContext.Provider>
  );
};

export default App;
