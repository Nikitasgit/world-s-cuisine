import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [inputContent, setInputContent] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputContent
      )
      .then((res) => setData(res.data.meals));
  }, [inputContent]);

  return (
    <div>
      <h1>World's Cuisine</h1>
      <p>A selection of the best recipes from all around the world</p>
      <input
        className="input"
        type="text"
        placeholder="ex: bolognese"
        onChange={(e) => setInputContent(e.target.value)}
      />

      <ul className="meals">
        {data === null ? (
          <h3 className="no-results">No results... Try something else!</h3>
        ) : (
          data
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)
        )}
      </ul>
    </div>
  );
}
export default App;
