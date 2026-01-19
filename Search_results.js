const Search_result = (app, amadeus, Amadeus) =>{

    app.get("/api/cities", async (req, res) => {
  try {
    const keyword = req.query.keyword;

    if (!keyword || keyword.length < 1) {
      return res.json([]);
    }

    const response = await amadeus.referenceData.locations.get({
      keyword,
      subType: "CITY,AIRPORT",
      page: { limit: 10 },
    });

    const results = response.data.map(item => ({
      name: item.name,
      iataCode: item.iataCode,
      type: item.subType,
      country: item.address.countryName,
    }));

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Amadeus API error" });
  }
});

}

export default Search_result