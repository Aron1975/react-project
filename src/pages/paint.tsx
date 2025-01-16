import MovingDot from "../components/MovingDot";
import {PaintCanvas} from "../components/PaintCanvas";
import './paint.css'

export function Paint(){

    return (
        <div className="paint">
            <br /><br /><br />
            <div><PaintCanvas /></div>
           
        </div>
    )
}