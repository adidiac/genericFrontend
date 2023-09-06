import React from 'react';
import "./App.css"
import Home from "./Home"
function App() {
  const body = () => {
    return <Home />;
  }
  return <div>
    <div className='app'></div>
      <div className='content'>
        {body()}
      </div>
    </div>;
}

export default App;
