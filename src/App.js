
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";


  
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
       
        <div className="container">
        <Routes>
            <Route path="/" element={<Navbar />} />
           
        </Routes>
        </div>
        
      </Router>
    </div>
  );
}
  
export default App;


