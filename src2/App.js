import React from 'react';
import Counter from './componets/Counter';
import Todos from './componets/Todos';
function App() {

  return (
    <div className="App">
        <Counter/>
        <hr></hr>
        <Todos/>
    </div>
  );
}

export default App;
