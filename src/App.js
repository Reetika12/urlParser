import React from 'react';
import './App.css';
import RequiredComponent from './Containers/RequiredComponent'
import BubbleEvent from './Containers/BubbleEvent'
function App() {
  return (
    <div className="App">
      <RequiredComponent />
      <BubbleEvent/>
    </div>
  );
}

export default App;
