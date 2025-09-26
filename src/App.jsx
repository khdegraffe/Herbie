import { useState } from "react";
import "./App.css";

function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleAddRecipe = (searchTerm) => {
  //   console.log(searchTerm);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.data);
  };

  return (
    <div>
      <h1 className="inline-flex bg-sky-100 text-lg font-bold">Herbie</h1>
      <form className="flex justify-between">
        <input
          type="text"
          placeholder="Search"
          onSubmit={handleSubmit}
          className="border rounded ml-20"
        />
        <button className="border rounded bg-gray-200 mr-20">Add Recipe</button>
      </form>
    </div>
  );
}

export default App;
