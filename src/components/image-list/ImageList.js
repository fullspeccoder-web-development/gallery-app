import { useState, useEffect } from "react";
import { v4 } from "uuid";

import SearchBar from "../search-bar/SearchBar";
import Image from "../image/Image";

import "./ImageList.scss";

import { getData } from "../../data";

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData(setImages);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getData(setImages);
  };

  const imageElements = images.map((image) => <Image key={v4()} {...image} />);

  return (
    <div className="ImageList">
      <h1 className="ImageList-header">My Gallery</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <div className="ImageList-images">{imageElements}</div>
    </div>
  );
};

export default ImageList;
