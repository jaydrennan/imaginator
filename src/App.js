import logo from "./logo.svg";
import "./App.css";
import "./output.css";
import Search from "./components/Search";
import Submit from "./components/Submit";
import ImageCard from "./components/ImageCard";
import Range from "./components/Range";
import React, { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [webPrompt, setWebPrompt] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Search prompt={webPrompt} setPrompt={setWebPrompt} />
      <Submit
        setImages={setImages}
        prompt={webPrompt}
        setIsLoading={setIsLoading}
      />

      {isLoading ? (
        <span className="loading loading-ring loading-xs"></span> // Loading indicator
      ) : (
        <ImageCard images={images} />
      )}
    </div>
  );
}

export default App;
