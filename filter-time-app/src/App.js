import "./App.css";
import { useState } from "react";
import Data from "./Data";
import Filters from "./components/Filters";

function App() {
  const [userData] = useState(Data);

  function filteredData(duration, date, events) {
    const durationInMs = duration * 60 * 1000;
    const dateInMs = new Date(date).getTime();
    const filteredEvents = events.filter((event) => {
      const startTime = new Date(event.start).getTime();
      const endTime = new Date(event.end).getTime();
      return endTime - startTime === durationInMs && startTime >= dateInMs;
    });
    return filteredEvents;
  }

  return (
    <div className="App">
      <header>
        <nav>
          <h3>FIND A FREE TIME</h3>
        </nav>
      </header>
      <Filters data={userData} filteredData={filteredData} />
    </div>
  );
}

export default App;
