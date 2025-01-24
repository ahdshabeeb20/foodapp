import { useEffect } from "react";
import { useState } from "react";
import styles from "./Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "f84289d16bbe41dab7cddab5bd6a14a5";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  // useEffect(() => {
  //   async function fetchFood() {
  //     const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
  //     const data = await res.json();
  //     setFoodData(data.results);
  //   }
  //   fetchFood();
  // }, [query]);
  console.log(query);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      ></input>
    </div>
  );
}
