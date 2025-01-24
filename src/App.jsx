import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/nav";
import "./App.css"

function App() {
  const [foodData, setFoodData] = useState([]);
  console.log(foodData)
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData}/>
    </div>
  );
}

export default App;
