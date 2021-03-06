import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const getUser = (id) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
          withCredentials: true,
          headers: { "Content-Type": "application/json;charset=UTF-8" },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/upload/${id}`)
          .then((res) => {
            dispatch({
              type: UPLOAD_PICTURE,
              payload: res.data.picture,
              withCredentials: true,
              headers: { "Content-Type": "application/json;charset=UTF-8" },
            });
          });
      })
      .catch((err) => console.log(err));
  };
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
      data: { bio },
      withCredentials: true,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    })
      .then((res) => {
        dispatch({ type: UPDATE_BIO, payload: bio });
      })
      .catch((err) => console.log(err));
  };
};

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/follow` + followerId,
      data: { idToFollow },
      withCredentials: true,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    }).then((res) => {
      dispatch({
        type: FOLLOW_USER,
        payload: { idToFollow },
      }).catch((err) => console.log(err));
    });
  };
};

export const unfollowUser = (followerId, idToUnFollow) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/user/unfollow` + followerId,
      data: { idToUnFollow },
      withCredentials: true,
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    }).then((res) => {
      dispatch({
        type: UNFOLLOW_USER,
        payload: { idToUnFollow },
      }).catch((err) => console.log(err));
    });
  };
};
