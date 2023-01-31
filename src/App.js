import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((res) => res.json())
        .then((res) => {
          setUserData(res.data);
          setLoading(false);
        });
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <h1>BRAND NAME</h1>
          <button onClick={handleClick}>Get Users</button>
        </nav>
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <Card userData={userData} />
        )}
      </header>
    </div>
  );
}

export default App;
