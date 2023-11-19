import React from "react";

const ComicForm = ({ textInputs, handleTextInputChange, generateComic }) => {
  return (
    <div className="comic-form">
      {textInputs.map((text, index) => (
        <textarea
          key={index}
          value={text}
          onChange={(e) => handleTextInputChange(index, e.target.value)}
          placeholder={`Panel ${index + 1}`}
        />
      ))}
      <button onClick={generateComic}>Generate Comic</button>
    </div>
  );
};

export default ComicForm;
