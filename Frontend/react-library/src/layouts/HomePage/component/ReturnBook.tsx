/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const ReturnBook = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../../Images/BooksImages/keytaab01.jpg")}
          width="151"
          height="233"
          alt="book"
        />
        <h6 className="mt-2">Book</h6>
        <p>KeytaabVault</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
