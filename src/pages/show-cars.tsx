import CarList from "../components/CarList";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8080/car/get/all";

type car = {
    id: bigint;
    regNr: string;
    make: string;
    model: string;
    year: number;
    color: string;
}

/*
interface Cars{
    items: car[],
    heading: string,
    onSelectItem: (item: string) => void
}*/

export function ShowCars(){

    const [cars, setCars] = useState<car[]>([]);
    //let cars = ["Volvo", "BMW", "Maserati"];
    const handleSelectItem = (item: string) => {console.log(item)}

    useEffect(() => {

        axios.get(URL).then((resp) => {

            const data = resp.data;
            setCars(data);
            console.log(data);
        }).catch((error) => {console.error(error); console.log(error.message)});
    }, [])

    return (
        <>
        <br /><br /><br />
            <h1>Show Cars</h1>
            <div><CarList  items={cars} heading="Car" onSelectItem={handleSelectItem}/></div>
        </>
    )
}

//export default ShowCars