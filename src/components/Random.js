import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [loading,setLoading] = useState(false);
  // const [gif,setGif] = useState(" ");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[] )

  const { gif, loading, fetchData } = useGIF();

  return (
    <div className="random-gifc-container">
      <h1 className="box-header">A RANDOM GIF</h1>
      {loading ? <Spinner /> : <img src={gif} />}
      <button className="box-btn" onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  );
};

export default Random;
