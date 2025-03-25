import MyBarChart from "../components/MyBarChart"
import { MyDonutChart } from "../components/MyDonutChart";
import { useState } from "react";

const MyCharts = () => {
    const data1 = [13, 45, 57, 34, 56, 24, 11];
    const data2 = [23, 35, 50, 31, 5, 22, 29];
    const data3 = [3, 5, 15, 24, 16, 14, 1];
    const data4 = [2, 5, 10, 1, 15, 12, 20];
    const [percentage, setPercentage] = useState(84);

    const onButtonClick = () => {
        setPercentage(percentage + 11);
    }

  return (
    <div>
        <br /><br /><br />
        <h1>Grafer</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <MyBarChart yValues1={data1} yValues2={data2}/>
                </div>
                <div className="col">
                    <MyBarChart yValues1={data3} yValues2={data4}/>
                </div>
            
                <div className="col" style={{background: 'rgba(27, 27, 29, 0.9)'}}>
                    <MyDonutChart percentage={percentage}/>
                </div>
                <button onClick={onButtonClick}></button>
            </div>
        </div>
        
    </div>
  )
}

export default MyCharts