import React from "react";
import { PageHeader } from "../components/layout/pageHeader";

export const Amenities = () => {
  const amenities = [
    { title: "Pool, Sun Deck and Spa" },
    { title: "Skydeck" },
    { title: "Mezzanine Room with Billiards" },
    { title: "Coffee Lounge with WiFi" },
    { title: "Outdoor Courtyard" },
    { title: "Community Gas Grill/BBQ Area" },
    { title: "Pizza Oven and Grilling Station" },
    { title: "Cardio and Strength Training Center" },
    { title: "Virtual Fitness" },
    { title: "Zen Yoga Studio" },
    { title: "Controlled Access" },
    { title: "Bike Kitchen and Storage" },
    { title: "Near Public Transit" },
    { title: "Retail Onsite" },
    { title: "Package Lockers" },
    { title: "Pet Friendly" }
  ];
  return (
    <div className="">
      <PageHeader
        page={{
          src: "/assets/img/pageHeader2.jpg",
          title: "Community Amenities",
          des: "Choose your floor plan"
        }}
      />
      <div className="m-auto px-8 my-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:max-w-6xl">
        {amenities.map((a) => (
          <p key={a.title} className="hover:bg-gray-300 p-1 rounded">
            {a.title}
          </p>
        ))}
      </div>
    </div>
  );
};
