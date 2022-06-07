import React from "react";
import { Planet } from "../itemDetails/itemDetails";
import { Record } from "../itemDetails/record/record";
import withSwapiService from "../hoc-helpers/withSwapiService";

const PlanetDetails = (props) => {
  return (
    <Planet {...props}>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </Planet>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
