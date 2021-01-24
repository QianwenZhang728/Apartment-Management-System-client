import React, { useState, useEffect } from "react";
import { PageHeader } from "../components/layout/pageHeader";
import { getFloorPlan } from "../services/utility";

const FloorPlanCard = ({ index = "", floorPlanObj = {} }) => {
  const { src = "", title = "", des = "" } = floorPlanObj;
  return (
    <div className="font-serif flex flex-col lg:flex-row p-4 lg:p-6 border rounded-lg shadow hover:shadow-lg">
      <img
        className="rounded-lg object-contain h-64 lg:w-48 mb-5 lg:mb-0 lg:mr-8"
        src={src}
        alt={`intro-card-${index}`}
      />

      <div className="">
        <p className="text-xl text-center capitalize whitespace-no-wrap mb-2">
          {title}
        </p>
        <p className="text-sm text-center">{des}</p>
      </div>
    </div>
  );
};

// const data  = [
//   {
//     src: "/assets/img/floor-plan/1.jpg",
//     title: "Studio |Up to 537 sq.ft.",
//     des: "Starting at $1,974.00 /month"
//   },
//   {
//     src: "/assets/img/floor-plan/2.jpg",
//     title: "1 Bed - 1 Bath |677 sq.ft.",
//     des: "Starting at $2,357.00 /month"
//   },
//   {
//     src: "/assets/img/floor-plan/3.jpg",
//     title: "1 Bed - 1 Bath |609 sq.ft.",
//     des: "Starting at $2,357.00 /month"
//   },
//   {
//     src: "/assets/img/floor-plan/4.jpg",
//     title: "1 Bed - 1 Bath |902 sq.ft.",
//     des: "Starting at $2,460.00 /month"
//   },

// ]
export const FloorPlan = () => {
  const [data, setData] = useState([]);
  const [choose, setChoose] = useState("");

  useEffect(() => {
    getFloorPlan().then((data) =>
      setData(
        data.map((d) => ({
          src: d.href,
          title: `${d.type} | ${d.area}`,
          des: `${d.rent} (Deposit: ${d.deposit})`,
          // src: d.href,
        }))
      )
    );
  }, []);

  return (
    <div className="">
      <PageHeader
        page={{
          src: "/assets/img/pageHeader1.jpg",
          title: "Floor Plan",
          des: "Choose your floor plan",
        }}
      />
      <div className="py-5 w-full flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="font-semibold mr-5">Floor Plan Filter</p>
          <select
            className="px-2 py-1 m-auto border text-lg"
            onChange={(e) => setChoose(e.target.value)}
          >
            <option value="">All</option>
            {data.map((d) => (
              <option key={d.title} value={d.title}>
                {d.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="my-5 m-auto px-8 grid md:grid-cols-2 gap-4 md:max-w-6xl">
        {data
          .filter((d) => !choose || (choose && d.title === choose))
          .map((d) => (
            <FloorPlanCard key={d.title} floorPlanObj={d} />
          ))}
      </div>
    </div>
  );
};
