import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import Rating from './components/Rating/Rating';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion'
function App() {



  return (
    <div className="App">
      <OnOff />
      <OnOff />

      <Rating />

      {/* 
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}


      <Accordion titleValue="Menu" collapsed={true} />
      <Accordion titleValue="Users" collapsed={false} />

      <UncontrolledAccordion titleValue="Menu" />
      <UncontrolledAccordion titleValue="Users" />
    </div>
  );
}

export default App;
