

const search = (app, amadeus, Amadeus) => {


  app.get(`/city-and-airport-search/:parameter`, (req, res) => {
    const parameter = req.params.parameter;
    //console.log(parameter)

    amadeus.referenceData.locations
      .get({
        keyword: parameter,
        subType: Amadeus.location.any,
      })
      .then(function (response) {

        // ✅ console log the result
      //  console.log("Response from Amadeus API:", response.result);


        // send it back to the frontend
        res.send(response.result);
      })
      .catch(function (error) {

        // ✅ console log the error
        console.error("Amadeus API error:", error);

        res.status(500).send(error);
      });
  });
};

export default search;
