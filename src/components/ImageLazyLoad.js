import React, { useState, useEffect } from "react";

export default function ImageLazyLoad(props) {
  const { original, placeholder } = props;

  const [currentImg, setCurrentImg] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgToLoad = new Image();
    imgToLoad.src = original;

    const loadImage = new Promise((resolve) => resolve(imgToLoad.onload));

    async function setImage() {
      try {
        await loadImage;
        setIsLoading(false);
        setCurrentImg(original);
      }
      catch (error) {
        console.log(error);
      }
    }
    
    setImage();
  }, [original]);

  return (
    <img
      className="img-background"
      src={currentImg}
      style={{
        opacity: isLoading ? 0.65 : 1,
        transition: "opacity 0.2s linear",
      }}
    />
  );
}