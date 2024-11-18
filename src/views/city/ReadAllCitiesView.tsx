import { html } from "hono/html";
import { Layout } from "../shared/layout";
import { City } from "../../models/City";


type ReadAllCitiesViewProps = {
  cities: Array<City>;
};

const CitiesList = ({ cities }: { cities: Array<City> }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ul>
  );
}

const ReadAllCitiesView = 
  ({ cities }: ReadAllCitiesViewProps) => 
    Layout({
      pageTitle: "List of Cities",
      children: html`
        <div>
          <h1>List of Cities</h1>
          ${CitiesList({ cities })}
        </div>
      `,
    });
  


export default ReadAllCitiesView;


