import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvent from "./Components/AddEvent";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import UpdateEvent from "./Components/UpdateEvent";

function App() {
  return (
    <>
    <BrowserRouter>

      <Navbar/>

      <Routes>
      <Route path='/' element={<> <Table/> </>} />
      <Route path='/AddEvent' element={<><AddEvent/> </>} />
      <Route path='/editEms/:id' element={<><UpdateEvent/></>}/>
     
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
