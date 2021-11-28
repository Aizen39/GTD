import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";

const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (isEmpty(userData)) setIsLoading(false);
  }, [userData]);

  return (
    <div className="post-container">
      {isLoading ? <i className="fas fa-spinner fa-pulse"></i> : <h2>Logi</h2>}
    </div>
  );
};

export default NewPostForm;
