import React from "react";

const Card = ({ userData }) => {
  return (
    <div className="container">
      {userData &&
        userData.map((item) => (
          <section key={item.id} className="card">
            <div className="top-container">
              <div className="img-container">
                <img src={item.avatar} alt={item.first_name} />
              </div>
              <div className="text">
                <h3>{`${item.first_name.toUpperCase()} ${item.last_name.toUpperCase()}`}</h3>
                <h5>{item.email}</h5>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
};

export default Card;
