import { useState } from "react";
import "./main";
import "./index.css";
import PropTypes from "prop-types";
import React from "react";

// Write your Color component here

const Color = ({ color, selectedColor, setSelectedColor }) => {
  return (
    <div
      className={color + (selectedColor === color ? "selected" : "")}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="title">
        <h1>The Paint Shop</h1>
      </div>
      <div id="colors-list">
        <h2>Cool</h2>
        <Color
          color="plum"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="lavender-chalk"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="flat-grey"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="minty"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="perfect-sky"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>

      <div id="colors-list">
        <h2>Warm</h2>
        <Color
          color="olive"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="light-olive"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="cream"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="warm-beige"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="toffee"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>

      <div id="colors-list">
        <h2>Summertime</h2>
        <Color
          color="hello-green"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="sunray"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="pink-purse"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="summer-blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="neon-green"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
}
Color.propTypes = {
  color: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired,
};

export { Color };

export default App;

export { PropTypes };
