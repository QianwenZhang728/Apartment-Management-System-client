import axios from "axios";

export const getLocationPromise = () => {
  return axios
    .get(`https://www.iplocate.io/api/lookup/`)
    .then((response) => response.data);
};

export const getCovid19Data = () => {
  return axios
    .get(
      "https://covid-19-statistics.p.rapidapi.com/reports?iso=USA&region_name=US",
      {
        headers: {
          accept: "application/json, text/plain, */*",
          usequerystring: "true",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "7477bfed99mshce63fb94f971059p1c3a2ejsna508c3c687d0",
        },
      }
    )
    .then((response) => response.data.data);
};

export const getFloorPlan = () =>
  axios
    .get("https://cs5610-team20-final-server.herokuapp.com/api/plans")
    .then((response) => response.data);
