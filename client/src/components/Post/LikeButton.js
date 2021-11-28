import React, { useContext, useEffect, useState } from "react";
import { IdContext } from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { likePost, unlikePost } from "../../actions/post.actions";
import { useDispatch } from "react-redux";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const id = useContext(IdContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, id));
    setLiked(true);
  };

  const unlike = () => {
    dispatch(unlikePost(post._id, id));
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(id)) setLiked(true);
    else setLiked(false);
  }, [id, post.likers, liked]);

  return (
    <div className="like-container">
      {id === null && (
        <Popup
          trigger={<img src="./img/icons/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          <div>Connectez-vous pour aimer un post !</div>
        </Popup>
      )}
      {id && liked === false && (
        <img src="./img/icons/heart.svg" onClick={like} alt="like" />
      )}
      {id && liked && (
        <img src="./img/icons/heart-filled.svg" onClick={unlike} alt="unlike" />
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
