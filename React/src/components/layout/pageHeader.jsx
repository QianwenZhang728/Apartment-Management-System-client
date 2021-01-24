import React from "react";

export const PageHeader = ({ page = {} }) => {
  return (
    <div className="relative text-white w-full py-32 flex flex-col justify-center items-center text-center">
      <img
        className="absolute w-full h-full object-cover opacity-75"
        style={{ zIndex: -10 }}
        src={page.src || ""}
        alt="header"
      />
      <p className="font-semibold text-5xl mb-2">{page.title || ""}</p>
      <p className="font-semibold mb-10">{page.des || ""}</p>
    </div>
  );
};
