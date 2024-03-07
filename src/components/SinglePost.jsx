import { useEffect, useState } from "react";
import "./SinglePost.css";
import baseurl from "../Api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ViewWeek } from "@mui/icons-material";
import { Buffer } from "buffer";

const SinglePost = () => {
  const [viewData, setViewData] = useState({});
  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`${baseurl}/write/view1/${id}`)
      .then((response) => {
        setViewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, [id]); // Add id to the dependency array

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {viewData.image && (
          <img
            className="singlePostImg"
            src={`data:image/jpeg;base64,${Buffer.from(
              viewData.image.data
            ).toString("base64")}`}
            alt="Post"
          />
        )}
        <h1 className="singlePostTitle">{viewData.title}</h1>
        <div className="singlePostInfo">
          <span>
            Author: <b className="singlePostAuthor">{viewData.author}</b>
          </span>
          {/* Display other post information here */}
        </div>
        <p className="singlePostDesc">{viewData.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
