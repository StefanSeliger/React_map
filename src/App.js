import ToDoList from './components/ToDoList';
import './App.css';
import Movie from './components/Movie';


function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoList /> 
      <h1>Movie Database</h1>
      <Movie />
    </div>
  );
}

export default App;
