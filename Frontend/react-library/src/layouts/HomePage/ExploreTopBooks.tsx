/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const ExploreTopBooks = () => {
  return (
    <div className="ps-5 mb-4 bg-dark header">
      <div className="container-fluid py-5 tet-white d-flex-content-center align-items-center">
        <div>
          <h1 className="display-5 fw-bold">Find Your next advanture</h1>
          <p className="col-md-8 fs-4">Where would you like to go next?</p>
          <a type="button" className="btn main-color btn-lg text-white" href="">
            {" "}
            Explore top books
          </a>
        </div>
      </div>
    </div>
  );
};
