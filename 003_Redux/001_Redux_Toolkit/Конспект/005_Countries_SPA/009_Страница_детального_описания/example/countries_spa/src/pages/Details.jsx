import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import {
  selectCurrentCountry,
  selectDetails,
} from "../store/details/details-selectors";
import { useEffect } from "react";
import { loadCountryByName } from "../store/details/details-actions";

export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectDetails);
  console.log(currentCountry);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    /*Так как я перехожу по разным страницам с детальной информацией
     * То мне нужно следить за изменениями в url строке query параметра name*/
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
