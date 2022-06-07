//src/myHooks/usePlanetInfo.js
import useRequest from "./useRequest";
import { getPlanet } from "../requestsAPI/requestsAPI";
import { useCallback } from "react";

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);

  return useRequest(request);
};

export default usePlanetInfo;
