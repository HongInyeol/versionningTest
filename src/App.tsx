import React from 'react';
import './App.css';

function App() {
  const nodeEnv = process.env.NODE_ENV;
  return (
    <>
      <div className="App">TEs2ST</div>;<div className="App">TEST4443ttt</div>
      <div className="App">{nodeEnv}</div>
    </>
  );
}

export default App;
