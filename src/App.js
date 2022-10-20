import Card from "./components/Card/Card";
import emoji from "./components/data/emoji.json";
import { v1 as uuid } from "uuid";
import { useEffect, useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emoji.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div className="app">
      <div className="header">
        <h1> 👉 Emoji Search 😉</h1>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Emoji 😊"
        />
      </div>
      <div className="card-container">
        {data.map((item) => (
          <Card key={uuid()} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
