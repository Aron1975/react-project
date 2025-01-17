import "./PaintCanvas.css"
import { MouseEventHandler, useState, useRef, useEffect } from "react";

type Point = {
    x: number,
    y:number,
}

export function PaintCanvas(){

    const [selectedShape, setSelectedShape] = useState('Line');
    const [selectedStrokeColor, setSelectedStrokeColor] = useState('#808080'); 
    const [selectedFillColor, setSelectedFillColor] = useState('#ebd8c1');
    const [fillChecked, setFillChecked] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(2);

    const coordCalibr = {x:19,y:116};
    //const elementRef = useRef(null);
    const elementRef = useRef<HTMLCanvasElement | null>(null);
    const [points, setPoints] = useState<Point[]>([]);
    const [startPoint, setStartPoint] = useState<Point>({x:0,y:0});
    const [endPoint, setEndPoint] = useState<Point>({x:0,y:0});

    const options = [
        { value: 'Line', label: 'Line' },
        { value: 'Circle', label: 'Circle' },
        { value: 'Square', label: 'Square' }
      ]

    const startDraw: MouseEventHandler<HTMLCanvasElement> = (event) => {
        const {clientX, clientY} = event;
        setPoints([...points, {x:clientX, y:clientY}]);
        console.log("Mouse down...", clientX, " ", clientY);
        setStartPoint({x:clientX-coordCalibr.x, y:clientY-coordCalibr.y});
    }

    const endDraw: MouseEventHandler<HTMLCanvasElement> = (event) => {
        const {clientX, clientY} = event;
        console.log("Mouse up...", clientX, " ", clientY, " checked: " + fillChecked);
        setEndPoint({x:clientX-coordCalibr.x, y:clientY-coordCalibr.y});
        
    };

    const cleanCanvas = () => {

        const canvas = elementRef.current;
        if (!canvas) return; // Exit early if null
        const ctx = canvas.getContext('2d');
        if (!ctx) return; // Exit early if null
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const handleCheckboxChange = () => {

        setFillChecked(!fillChecked);
    }
    
    useEffect(() => {

        const canvas = elementRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        console.log(rect.top + " " + rect.left);
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.beginPath();
        
        if(selectedShape === "Line"){

            ctx.moveTo(startPoint.x, startPoint.y);
            ctx.lineTo(endPoint.x, endPoint.y);
        }

        if(selectedShape === "Circle"){

            const radius = Math.round(Math.sqrt(Math.pow((startPoint.x-endPoint.x),2)+Math.pow((startPoint.y-endPoint.y),2)));
            ctx.arc(startPoint.x, startPoint.y, radius, 0, 2 * Math.PI);  
        }

        if(selectedShape === "Square"){

            ctx.rect(startPoint.x, startPoint.y, Math.abs(startPoint.x-endPoint.x), Math.abs(startPoint.y-endPoint.y));
        }

        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = selectedStrokeColor;
        if(fillChecked){  
            ctx.fillStyle=selectedFillColor;
            ctx.fill();
        }
        ctx.stroke();

    },[endPoint])

    return(
        <div className="paint-container">

            <div>
                <h2>Paint Area</h2>
                <canvas ref={elementRef} className="my-canvas" id="myCanvas" width="1000" height="600" onMouseDown={startDraw} onMouseUp={endDraw}></canvas>
            </div>
            
            
            <div>
                <h3>Tools</h3>
                <div className="tools" >
                    <label>
                        <p>Shape:</p>
                        <select name="selectedShape" value={selectedShape} onChange={(e) => setSelectedShape(e.target.value)} >
                            {options.map((o, index) => (
                                <option key={index} value={o.value}>{o.label}</option>
                            ))}
                        </select>
                    </label>
                    <p>Color:</p>
                    <input type="color" value={selectedStrokeColor} onChange={(e) => setSelectedStrokeColor(e.target.value)}/>
                    <p>Fill color:</p>
                    <input type="color" value={selectedFillColor} placeholder="{selectedFillColor}" onChange={(e) => setSelectedFillColor(e.target.value)}/>
                    <p id="p-fill">Fill:
                    <input type="checkbox" name="fill" defaultChecked={false} onChange={(e) => handleCheckboxChange(e)}/>
                    </p>
                    <p>Size:{strokeWidth}
                    <input type="range" min={1} max={30} value={strokeWidth} onChange={(e) => {setStrokeWidth(parseInt(e.target.value))}}/>
                    
                    </p>
                    <button onClick={cleanCanvas}>Clean Canvas</button>
                </div>
            </div>
        </div>
    )
}