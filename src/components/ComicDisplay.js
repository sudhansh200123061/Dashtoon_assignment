import React from "react";
import ComicPanel from "./ComicPanel";

const ComicDisplay = ({ comicImages }) => {
  return (
    <div className="comic-display">
      {comicImages.map((image, index) => (
        <ComicPanel key={index} image={image} index={index} />
      ))}
    </div>
  );
};

export default ComicDisplay;
