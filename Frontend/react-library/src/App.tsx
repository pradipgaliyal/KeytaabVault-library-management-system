import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NabbarAndFooter/Navbar";
import { Footer } from "./layouts/NabbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/component/HomePage";
import { SearchBookPage } from "./layouts/SearchBookPage/SearchBookPage";

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBookPage />
      <Footer />
    </div>
  );
};
