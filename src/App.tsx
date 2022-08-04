import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import Rating from './components/Rating/Rating';

function App() {

  return (
    <div className="App">
      <OnOff on={false} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion />
    </div>
  );
}

export default App;
