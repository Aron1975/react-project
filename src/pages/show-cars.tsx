import CarList from "../components/CarList";

export function ShowCars(){

    let cars = ["Volvo", "BMW", "Maserati"];
    const handleSelectItem = (item: string) => {console.log(item)}

    return (
        <>
        <br /><br /><br />
            <h1>Show Cars</h1>
            <div><CarList  items={cars} heading="Car" onSelectItem={handleSelectItem}/></div>
        </>
    )
}

//export default ShowCars