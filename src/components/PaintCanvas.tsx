import { Tools } from "./Tools";
import MovingDot from "./MovingDot"
import "./PaintCanvas.css"
import { MouseEventHandler, useState, useRef, useEffect } from "react";

type Point = {
    x: number,
    y:number,
}

export function PaintCanvas(){

    /*const [dataFromChild, setDataFromChild] = useState('');

    const handleDataFromChild = (childData: string) => {
        setDataFromChild(childData);
        console.log(childData);
    };*/
    const [selectedShape, setSelectedShape] = useState('Line');
    const [filled, setFilled] = useState(false);
    const [selectedStrokeColor, setSelectedStrokeColor] = useState('grey'); //#22828
    const [selectedFillColor, setSelectedFillColor] = useState();

    const coordCalibr = {x:19,y:116};
    const elementRef = useRef(null);
    const [points, setPoints] = useState<Point[]>([]);
    const [beginDrawPoint, setBeginDrawPoint] = useState(false);
    const [startPoint, setStartPoint] = useState<Point>({x:0,y:0});
    const [endPoint, setEndPoint] = useState<Point>({x:0,y:0});

    const options = [
        { value: 'Line', label: 'Line' },
        { value: 'Circle', label: 'Circle' },
        { value: 'Square', label: 'Square' }
      ]

    const startDraw: React.MouseEventHandler<HTMLCanvasElement> = (event) => {
        const {clientX, clientY} = event;
        setPoints([...points, {x:clientX, y:clientY}]);
        console.log("Mouse down...", clientX, " ", clientY);
        setStartPoint({x:clientX-coordCalibr.x, y:clientY-coordCalibr.y});  
        console.log("Shape: " + selectedShape);  
    }

    const endDraw: React.MouseEventHandler<HTMLCanvasElement> = (event) => {
        const {clientX, clientY} = event;
        console.log("Mouse up...", clientX, " ", clientY);
        setEndPoint({x:clientX-coordCalibr.x, y:clientY-coordCalibr.y});
        
    };

    const cleanCanvas = () => {

        const canvas = elementRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    
    useEffect(() => {

        const canvas = elementRef.current;
        const rect = canvas.getBoundingClientRect();
        console.log(rect.top + " " + rect.left);
        const ctx = canvas.getContext("2d"); 
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

        ctx.lineWidth = 6;
        ctx.strokeStyle = selectedStrokeColor;
        if(filled){  
            ctx.fill();
        }
        ctx.stroke(); 

        return () => {
            canvas.current = null;
        }

    },[endPoint])

    const Draw = (e: MouseEventHandler) => {


    }

    const drawLine = () => {

    }

    return(
        <div className="paint-container">
           {/*} <div>
                <h2>Paint Area</h2>
                <div className="main-canvas" id="canv" onMouseDown={startDraw}>
                    <MovingDot />
                    </div> 
                    {points.map((point,index) => (
                        <div key={index} className="point" style={{
                        left: point.x-10,
                        top: point.y-15,
                        }}
                        >
                        .
                        </div>

                    ))}
                     
            </div>*/}
            <div>
                <h2>Paint Area</h2>
                <canvas ref={elementRef} className="my-canvas" id="myCanvas" width="1000" height="600" onMouseDown={startDraw} onMouseUp={endDraw}></canvas>
            </div>
            
            
            <div>
                <h3>Tools</h3>
                {/*<Tools handleDataFromChild={handleDataFromChild}/>*/}
                <div className="tools" >
                    <p>Border color:</p>
                    <input type="color" />
                    <p>Fill color:</p>
                    <input type="color" />
                    <label>
                        <p>Shape:</p>
                        <select name="selectedShape" value={selectedShape} onChange={(e) => setSelectedShape(e.target.value)} >
                            {options.map((o, index) => (
                                <option key={index} value={o.value}>{o.label}</option>
                            )

                            )}
                        </select>
                    </label>
                    <button>Erase last</button>
                    <button onClick={cleanCanvas}>Clean Canvas</button>
                </div>
            </div>
        </div>
    )
}