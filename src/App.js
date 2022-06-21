import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Home props={setStart} />} 
    </div>
  );
}

export default App;
