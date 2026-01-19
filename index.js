import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import search from "./Search.js";
import Between_cities from "./Between_cities.js";
import Amadeus from "amadeus";
import Search_results from './Search_results.js'
import Flight_detail from "./Flight_details.js";

const app = express();
const PORT = process.env.PORT||5000;

  const amadeus = new Amadeus({
    clientId: "POY0hg8sv3gATcy4arDw5dnm0tx4oQb3",
    clientSecret: "NLbaFBA11x604MSQ",
  });

app.use(bodyParser.json());
app.use(cors({
  origin: "*"
}));

search(app, amadeus, Amadeus)
Between_cities(app, amadeus)
Search_results(app, amadeus, Amadeus)
Flight_detail(app, amadeus, Amadeus)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
