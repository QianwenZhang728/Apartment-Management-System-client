import React from "react";
import PropTypes from "prop-types";
import Covid from "../components/layout/covid";
import { useParams } from "react-router-dom";
import { PageHeader } from "../components/layout/pageHeader";

export const CovidReport = (props) => {
  const { state } = useParams();
  return (
    <div>
      <PageHeader
        page={{
          src: "/assets/img/pageHeader3.jpg",
          title: "Covid-19",
          des: "Realtime Stastic",
        }}
      />
      <Covid province={state} />
    </div>
  );
};

CovidReport.propTypes = {};
