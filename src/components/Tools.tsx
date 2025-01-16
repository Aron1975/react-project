import "./PaintCanvas.css"
import { useState } from "react";

export function Tools( {handleDataFromChild} ){

    const[childData, setChildData] = useState("");

    const sendData = (e) => {
        e.preventDefault();
        handleDataFromChild(childData);
      };

    //const [selectedShape, setSelectedShape] = useState('Line');

    const options = [
        { value: 'Line', label: 'Line' },
        { value: 'Circle', label: 'Circle' },
        { value: 'Square', label: 'Square' },
        { value: 'Triangle', label: 'Triangle' }
      ]

    return(<>
        
        <div className="tools" >
            
            <input type="color" value="blue"/>
            <label>
                <p>Pick a shape:</p>
                <select name="selectedShape" value={childData} onChange={(e) => setChildData(e.target.value)} >
                    {options.map((o) => (
                        <option value={o.value}>{o.label}</option>
                    )

                    )}
                </select>
            </label>
            <button>Remove</button>
            <button>Clean Canvas</button>
        </div>
    
    </>)
}