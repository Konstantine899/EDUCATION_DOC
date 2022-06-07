import React from "react";
import { Person } from "../itemDetails/itemDetails";
import { Record } from "../itemDetails/record/record";
import withSwapiService from "../hoc-helpers/withSwapiService";
import SwapiService from "../../services/SwapiService";
import withDetailsData from "../hoc-helpers/withDetailsData";

const PersonDetails = (props) => {
  return (
    <Person {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </Person>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};
const { getPerson } = new SwapiService();

export default withSwapiService(mapMethodsToProps)(PersonDetails);
