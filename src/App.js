import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
// import Products from "./Products";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State", state);
  if (state.todo.isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="App">
      <h1 className="font-bold text-xl mb-2">TODO APP REACT REDUX(TOOLKIT)</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => dispatch(fetchTodos())}
      >
        Fetch todos
      </button>

      {state.todo.data &&
        state.todo.data.map((todo) => (
          <ol>
            <li className="font-bold text-xl mb-2">{todo.title}</li>
          </ol>
        ))}
    </div>
  );
}

export default App;
