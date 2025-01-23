import { useEffect } from "react";
import { useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e21ac72eaba444c6a3556a9082655236";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  console.log(query);
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
    </div>
  );
}
