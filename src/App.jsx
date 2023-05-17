import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/navigation";
import Home from "./Pages/Home";
import Prestations from './Pages/Prestations';
import Galerie from './Pages/Galerie';
import Error from "./Pages/Error";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
