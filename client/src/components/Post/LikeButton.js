import React, { useContext, useEffect, useState } from "react";
import { IdContext } from "../AppContext";

const LikeButton = (post) => {
  const [liked, setLiked] = useState(false);
  const id = useContext(IdContext);

  useEffect(() => {
    if (post.likers.includes(id)) setLiked(true);
  }, [id, post.likers, liked]);

  return <div>Like</div>;
};

export default LikeButton;
