import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/navigation";
import Home from "./Pages/Home";
import Prestations from './Pages/Prestations';
import Galerie from './Pages/Galerie';
import Error from "./Pages/Error";

function App() {
  

  return (
    <>
    <header>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/prestation/:id " element={<Prestations />}></Route>
        <Route exact path="/galerie" element={<Galerie />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </main>
    <footer>
      
    </footer>
    </>
  )
}

export default App
