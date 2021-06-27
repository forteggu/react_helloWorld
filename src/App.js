import Todo from "./Components/Todo";
function App() {
  return (
    <div className="App">
      <h1>Todo List:</h1>
      <Todo text="Learn React" />
      <Todo text="Learn React Native" />
      <Todo text="Find a job" />
    </div>
  );
}

export default App;
