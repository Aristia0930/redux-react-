import Counter from './components/Counter';
import './App.css';
import Todos from './components/Todos';
import CounterContainers from './containers/CounterContainers';
import TodoContainer from './containers/TodoContainer';
function App() {
  return (
    <div className="App">
      <CounterContainers></CounterContainers>
      {/* <Counter number={0}/> */}
      <hr></hr>
      <TodoContainer/>


    </div>
  );
}

export default App;
