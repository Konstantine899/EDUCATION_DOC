import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "../store/countries/countries-selectors";
import { loadCountries } from "../store/countries/countries-actions";
import { selectControls } from "../store/controls/controls-selectors";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Получаю введенные символы
  const { search, region } = useSelector(selectControls);
  //Получаю все страны
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
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
