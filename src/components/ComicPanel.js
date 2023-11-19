import React from "react";

const ComicPanel = ({ image, index }) => {
  return (
    <div className="comic-panel">
      <img src={`data:image/png;base64,${image}`} alt={`Panel ${index + 1}`} />
    </div>
  );
};

export default ComicPanel;
