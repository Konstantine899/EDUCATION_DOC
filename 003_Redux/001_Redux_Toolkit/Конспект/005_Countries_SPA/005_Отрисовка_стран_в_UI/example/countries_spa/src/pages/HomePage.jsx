import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import {
  selectAllCountries,
  selectCountriesInfo,
} from "../store/countries/countries-selectors";
import { loadCountries } from "../store/countries/countries-actions";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countries = useSelector(selectAllCountries);
  const { status, error, quantity } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!quantity) {
      dispatch(loadCountries());
    }
  }, [quantity, dispatch]);

  return (
    <>
      <Controls />

      {error && <h2>Can`t fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && (
        <List>
          {countries.map((country) => {
            console.log();
            const countryInfo = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: "Population",
                  description: country.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: country.region,
                },
                {
                  title: "Capital",
                  description: country.capital,
                },
              ],
            };

            return (
              <Card
                key={country.name}
                onClick={() => navigate(`/country/${country.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
