import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/navigation";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Error from "./Pages/Error";

function App() {
  

  return (
    <>
    <header>
      <Navigation />
    </header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    </>
  )
}

export default App
