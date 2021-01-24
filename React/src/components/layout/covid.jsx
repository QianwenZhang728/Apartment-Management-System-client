import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCovid19Data } from "../../services/utility";
import { ItemCell } from "./intro";

const state_data = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];

export const CovidSearch = () => {
  const [province, setProvince] = useState(state_data[0].name);
  return (
    <div className="flex text-md w-full justify-center items-center">
      {/* <input
        value={province}
        className="rounded border m-1 mr-2 text-black px-1"
        onChange={({ nativeEvent }) => setProvince(nativeEvent.target.value)}
      /> */}
      <select
        value={province}
        className="rounded border m-1 mr-2 text-black px-1"
        onChange={({ nativeEvent }) => setProvince(nativeEvent.target.value)}
      >
        {state_data.map((state) => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <Link to={`/covid/${province}`}>
        <button type="button" className="px-1 bg-gray-100 text-black rounded">
          Search
        </button>
      </Link>
    </div>
  );
};

const Covid = ({ province }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    if (province) {
      setLoading(true);
    }
  }, [province]);

  useEffect(() => {
    if (province) {
      getCovid19Data()
        .then((_data) =>
          _data.filter(
            (state) =>
              state.region.province.toLowerCase() === province.toLowerCase()
          )
        )
        .then((res) => {
          if (res && res.length > 0) {
            setData(() => res[0]);
          } else {
            setData({});
          }
        })
        .then(() => setLoading(false));
    }
  }, [province]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="text-center mb-10 text-white border-b bg-indigo-400 py-10 shadow-lg">
      <div className="pb-3 flex justify-center items-center">
        <CovidSearch />
      </div>
      <div className="grid md:grid-cols-5 gap-4 px-20">
        {loading && <p className="text-xl text-center w-full">Loading...</p>}
        {!loading && (
          <>
            <ItemCell
              className="md:col-span-2"
              title={"Search province"}
              value={province}
            />
            <ItemCell
              title={"DAILY NEW CASE"}
              value={`+${data.confirmed_diff || "na"}`}
            />
            <ItemCell title={"COMFIRED"} value={data.confirmed || "na"} />
            <ItemCell title={"DEATH"} value={data.deaths || "na"} />
          </>
        )}
      </div>
    </div>
  );
};

export default Covid;
