import Counter from './components/Counter';
import './App.css';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <Counter number={0}/>
      <hr></hr>
      <Todos/>


    </div>
  );
}

export default App;
