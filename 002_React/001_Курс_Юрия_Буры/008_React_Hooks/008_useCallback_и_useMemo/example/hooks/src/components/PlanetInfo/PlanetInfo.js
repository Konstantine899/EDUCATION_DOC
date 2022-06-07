import React from "react";
import usePlanetInfo from "../../myHooks/usePlanetInfo";

const PlanetInfo = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id);
  //Если получаем ошибку
  if (error) {
    return <div>Something is wrong</div>;
  }
  //Если мы сейчас загружаем данные
  if (loading) {
    return <div>Loading...</div>;
  }

  // Если есть данные то возвращаю данные
  return (
    <div>
      {id} - {data.name}
    </div>
  );
};

export default PlanetInfo;
