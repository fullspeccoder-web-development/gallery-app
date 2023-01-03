import { useState, useEffect } from "react";
import { v4 } from "uuid";

import SearchBar from "../search-bar/SearchBar";
import Image from "../image/Image";

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
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      <div>{imageElements}</div>
    </div>
  );
};

export default ImageList;
