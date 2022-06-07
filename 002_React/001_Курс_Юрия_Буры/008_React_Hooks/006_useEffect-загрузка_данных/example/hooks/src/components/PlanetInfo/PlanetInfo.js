import React, { useEffect, useState } from "react";

const PlanetInfo = ({ id }) => {
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((result) => result.json())
      .then((data) => {
        !cancelled && setPlanet(data.name);
      });
    // функция очистки
    return () => (cancelled = true);
  }, [id]);
  return (
    <div>
      {id} - {planet}
    </div>
  );
};

export default PlanetInfo;
