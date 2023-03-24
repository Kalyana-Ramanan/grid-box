import React, { useState } from 'react';
import './App.css';

function App() {
  const [numBoxes, setNumBoxes] = useState(0);

  const handleInputChange = (event) => {
    setNumBoxes(event.target.value);
  };

  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < numBoxes; i += Math.floor(Math.sqrt(numBoxes))) {
      const row = [];
      for (let j = i; j < i + Math.floor(Math.sqrt(numBoxes)) && j < numBoxes; j++) {
        row.push(<div key={j} className="box"></div>);
      }
      grid.push(<div key={i} className="row">{row}</div>);
    }
    return grid;
  };

  return (
    <div>
      <input type="number" onChange={handleInputChange} />
      <div className="grid">{renderGrid()}</div>
    </div>
  );
}

export default App;