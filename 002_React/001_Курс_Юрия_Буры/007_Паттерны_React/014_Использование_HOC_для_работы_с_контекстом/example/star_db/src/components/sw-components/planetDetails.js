import React from "react";
import ItemDetails from "../itemDetails/itemDetails";
import { Record } from "../itemDetails/record/record";
import withSwapiService from "../hoc-helpers/withSwapiService";

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="planet" label="Planet" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
