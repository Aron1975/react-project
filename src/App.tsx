
//import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  Welcome  from "./pages/welcome"
import  EditCars from "./pages/edit-cars"
import { ShowCars } from "./pages/show-cars"
//import { Layout } from "./Layout"
import { Paint } from "./pages/paint"
//import { Navbar } from "./components/Navbar"
import { Layout } from "./Layout"
import { Other } from "./pages/Other"
import MyCharts  from "./pages/charts"

function App(){

  return(
    <>
    <Router basename="/react-project">

   {/*}<Navbar />*/}
      <Routes>
      
        <Route element={<Layout/>}>
       
          <Route path="/" element={<Welcome />} />
          <Route path="/edit-cars" element={<EditCars />} />
          <Route path="/show-cars" element={<ShowCars />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/charts" element={<MyCharts />} />
          <Route path="*" element={<Other />} />
        </Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default App;
