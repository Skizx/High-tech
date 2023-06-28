import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Prestations from './Pages/Prestations';
import Galerie from './Pages/Galerie';
import Error from "./Pages/Error";

function App() {
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/prestation" element={<Prestations />}></Route>
        <Route exact path="/galerie" element={<Galerie />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App
