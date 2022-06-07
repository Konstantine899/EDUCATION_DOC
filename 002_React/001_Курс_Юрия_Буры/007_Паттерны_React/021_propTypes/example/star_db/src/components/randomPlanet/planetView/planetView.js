import React from "react";

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">{population}</span>
            <span>123124</span>
          </li>
          <li className="list-group-item">
            <span className="term">{rotationPeriod}</span>
            <span>43</span>
          </li>
          <li className="list-group-item">
            <span className="term">{diameter}</span>
            <span>100</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlanetView;
