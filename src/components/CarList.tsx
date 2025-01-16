import { MouseEvent } from "react";
import { useState } from "react";

interface Props{
    items: string[],
    heading: string,
    onSelectItem: (item: string) => void
}

function CarList(props: Props){

    
    const [selectedCar, setSelectedCar] = useState(-1);
    const getCars = () => {return props.items.length === 0 ? <p>No items found</p> : null}
    const getCars2 = (i: number) => {if(i===1) return <p>No items found</p>
        else if(i===2) return <p>Something went wrong</p>
        else return null};

    const handleClick = (event: MouseEvent) => console.log(event, " ", selectedCar, event.currentTarget.innerHTML, event.currentTarget.textContent)

    return (
    <>
    <h1>{props.heading} List</h1>
    {getCars()}
    <ul className="list-group">

        {props.items.map((item, index) => (
            <li key={item}
            className={selectedCar === index ? "list-group-item active" : "list-group-item"} 
            onClick = {(event) => {setSelectedCar(index); {handleClick(event)}; props.onSelectItem(item)}}>{item}</li>
        ))}

    </ul>
    
    </>)
}

export default CarList;