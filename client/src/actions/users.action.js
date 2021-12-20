import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).catch((err) => console.log(err));
  };
};
