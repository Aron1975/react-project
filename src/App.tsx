
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import  Welcome  from "./pages/welcome"
import  EditCars from "./pages/edit-cars"
import { ShowCars } from "./pages/show-cars"
import { Layout } from "./Layout"
import { Paint } from "./pages/paint"


function App(){

  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Welcome />} />
          <Route path="/edit-cars" element={<EditCars />} />
          <Route path="/show-cars" element={<ShowCars />} />
          <Route path="/paint" element={<Paint />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
