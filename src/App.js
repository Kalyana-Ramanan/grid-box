import React, { useState } from 'react'
import './App.css'

function App() {

    const [numBoxes, setNumBoxes] = useState(0);
    const handleInputChange = (event) => {
        setNumBoxes(event.target.value);
    };
    // const renderBoxes = () => {
    //     const boxes = [];
    //     for(let i = 0; i < numBoxes;i++){
    //         boxes.push(<div key={i} className = "box"></div>);
    //     }
    //     return boxes;
    // };
    const renderGrid =() =>{
        const grid = [];
        for(let i = 0; i < (numBoxes); i++){
            grid.push(<div key={i} className = "row">{renderRow(i)}</div>);
        }
        return grid;
    };
    const renderRow = (rowNum) => {
        const row = [];
        for(let j =0; j< (numBoxes); j++){
            row.push(<div key={rowNum * Math.sqrt(numBoxes) + j} className="box"></div>);
        }
        return row;
    };
    return(
        <div>
            <input type = "number" onChange = {handleInputChange} />
            {/* <div className='boxes'>{renderBoxes()}</div> */}
            <div className = "grid">{renderGrid()}</div>
            
        </div>
    );
}

export default App