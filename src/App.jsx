import  { useState } from "react";
import "./main";
import "./index.css";
import PropTypes from 'prop-types';
import React from 'react';


// Write your Color component here


const Color = ({ color, setSelectedColor }) => {
  return (
  <div 
  className={color}
   onClick={() => setSelectedColor(color)}></div>
  )

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
             
        <Color color="plum" setSelectedColor={setSelectedColor} />
        <Color color="lavender-chalk" setSelectedColor={setSelectedColor} />
        <Color color="flat-grey" setSelectedColor={setSelectedColor} />
        <Color color="minty" setSelectedColor={setSelectedColor} />
        <Color color="perfect-sky" setSelectedColor={setSelectedColor} />
      </div>
      

      <div id="colors-list">
        <h2>Warm</h2>
        <Color color="olive" setSelectedColor={setSelectedColor} />
        <Color color="light-olive" setSelectedColor={setSelectedColor} />
        <Color color="cream" setSelectedColor={setSelectedColor} />
        <Color color="warm-beige" setSelectedColor={setSelectedColor} />
        <Color color="toffee" setSelectedColor={setSelectedColor} />
      </div>

      <div id="colors-list">
        <h2>Summertime</h2>
        <Color color="hello-green" setSelectedColor={setSelectedColor} />
        <Color color="sunray" setSelectedColor={setSelectedColor} />
        <Color color="pink-purse" setSelectedColor={setSelectedColor} />
        <Color color="summer-blue" setSelectedColor={setSelectedColor} />
        <Color color="neon-green" setSelectedColor={setSelectedColor} />
      </div>
    
      </div>
      
  );
  
  
}



export default App ;



export {PropTypes};


