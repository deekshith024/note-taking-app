import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './routes'// import the Routes component from the routes.js file

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes /> {/* use the Routes component to render your app's routes */}
      </div>
    </BrowserRouter>
  );
}

export default App;


