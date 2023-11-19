import React, { useState } from "react";
import "./App.css";


function App() {
  const [textInputs, setTextInputs] = useState(Array(4).fill(""));
  const [comicImages, setComicImages] = useState([]);

  const handleTextInputChange = (index, value) => {
    const newTextInputs = [...textInputs];
    newTextInputs[index] = value;
    setTextInputs(newTextInputs);
  };

  const generateComic = async () => {
    try {
      const response = await fetch("http://localhost:5000/generate_comic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text_input: textInputs.join("\n") }),
      });
  
      const result = await response.json();
      if (result.success) {
        setComicImages(result.image);
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error generating comic:", error);
    }
  };  

  return (
    <div className="App">
      <div className="comic-form">
        {textInputs.map((text, index) => (
          <textarea
            key={index}
            value={text}
            onChange={(e) => handleTextInputChange(index, e.target.value)}
            placeholder={`Panel ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={generateComic}>Generate Comic</button>
      <div className="comic-display">
        {comicImages.map((image, index) => (
          <img key={index} src={`data:image/png;base64,${image}`} alt={`Panel ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
