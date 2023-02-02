import React, { useState } from "react";

const Filters = ({ data, filteredData }) => {
  const [duration, setDuration] = useState(30);
  const [date, setDate] = useState("Wed, 03 Mar 2021 04:00:15 GMT");
  const [availableSlots, setAvailableSlots] = useState([]);
  const handleClick = () => {
    const filteredEvents = filteredData(duration, date, data);
    setAvailableSlots(filteredEvents);
  };
  const uniqueDateData = [
    ...new Set(
      data.map(({ start }) => {
        const uniqueDate = new Date(start).toLocaleDateString();
        return uniqueDate;
      })
    ),
  ];
  const uniqueTimeData = [
    ...new Set(
      data.map(({ start, end }) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const interval = (endDate - startDate) / (60 * 1000);
        return interval;
      })
    ),
  ];

  function TimeFilter({ start }) {
    const time = new Date(start).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return time;
  }

  return (
    <>
      <div className="filter-container">
        <section className="date">
          <label htmlFor="date">Date</label>
          <select
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          >
            {uniqueDateData.map((event, index) => (
              <option key={index}>
                <div>{event}</div>
              </option>
            ))}
          </select>
        </section>
        <div className="btn-container">
          <button className="btn" onClick={handleClick}>
            Find
          </button>
        </div>
        <section className="time">
          <label htmlFor="time">Time</label>
          <select
            id="time"
            onChange={(e) => {
              e.preventDefault();
            }}
          >
            <option value="none" defaultValue disabled hidden>
              Choose your Time
            </option>
            {availableSlots.map((event, index) => (
              <option key={index} value={index}>
                <TimeFilter key={event.start} {...event} />
              </option>
            ))}
          </select>
        </section>
        <section className="duration">
          <label htmlFor="duration">Duration</label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            {uniqueTimeData.map((event, index) => (
              <option key={index}>{event}</option>
            ))}
          </select>
        </section>
      </div>
      <div className="output">
        {availableSlots.map((slot) => {
          const display = new Date(slot.start).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <div key={slot.start} className="result ">
              {display}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
