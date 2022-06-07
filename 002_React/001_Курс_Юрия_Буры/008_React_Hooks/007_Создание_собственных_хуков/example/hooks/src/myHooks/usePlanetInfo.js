//src/myHooks/usePlanetInfo.js
import { useEffect, useState } from "react";

const usePlanetInfo = (id) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.dev/api/planets/${id}`)
      .then((result) => result.json())
      .then((data) => {
        !cancelled && setName(data.name);
      });
    // функция очистки
    return () => (cancelled = true);
  }, [id]);
  return name;
};

export default usePlanetInfo;
