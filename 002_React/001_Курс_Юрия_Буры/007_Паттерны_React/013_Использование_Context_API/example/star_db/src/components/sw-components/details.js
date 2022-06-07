//src/sw-components/details
import React from "react";
import ItemDetails from "../itemDetails/itemDetails";
import { Record } from "../itemDetails/record/record";
import { SwapiServiceConsumer } from "../swapiServiceContext/swapiServiceContext";

const PersonDetails = (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => {
      return (
        <ItemDetails
          itemId={11}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          {" "}
          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const PlanetDetails = (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => {
      return (
        <ItemDetails
          itemId={5}
          getData={getPlanet}
          getImageUrl={getPlanetImage}
        >
          <Record field="planet" label="Planet" />
          <Record field="rotationPeriod" label="Rotation Period" />
          <Record field="diameter" label="Diameter" />
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

const StarshipDetails = (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => {
      return (
        <ItemDetails
          itemId={5}
          getData={getStarship}
          getImageUrl={getStarshipImage}
        >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      );
    }}
  </SwapiServiceConsumer>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
