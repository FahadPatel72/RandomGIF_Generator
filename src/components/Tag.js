import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("car");

  // const [loading,setLoading] = useState(false);
  // const [gif,setGif] = useState("");

  // async function fetchData(tag) {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[] )

  const { gif, loading, fetchData } = useGIF(tag);

  return (
    <div className="tag-gifc-container">
      <h1 className="box-header">RANDOM {tag} GIF</h1>
      {loading ? <Spinner /> : <img src={gif} />}

      <input
        type="text"
        onChange={(event) => {
          setTag(event.target.value);
        }}
        value={tag}
      />

      <button className="box-btn" onClick={() => fetchData(tag)}>
        Generate
      </button>
    </div>
  );
};

export default Tag;
