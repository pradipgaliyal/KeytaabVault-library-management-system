/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const LibraryServices = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">
            Can't find what you are looking for?
          </h1>
          <p className="lead">
            If you cannot find what you are looking for, send our library
            admin's a personal message!
          </p>
          <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
            <a
              href="#"
              type="button"
              className="btn main-color btn-lg px-4 me-md-2 fw-bold text-white"
            >
              Library Services
            </a>

            <a className="btn main-color btn-lg text-white" href="#">
              Sign up
            </a>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
      </div>
    </div>
  );
};
