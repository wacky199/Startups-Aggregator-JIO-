import React, { useState } from "react";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import DisplayStartupNews from "../components/StartupNews";
import startup_data from "../startup_data";

export default function Homescreen() {
  const [StartUpdata, setData] = useState(startup_data);
  const [pageNumber, setPageNumber] = useState(0);
  const StartUpdataPerPage = 8;
  const StartUpPageCount = Math.ceil(StartUpdata.length / StartUpdataPerPage);
  return (
    <div>
      <Navbar />
      <div className="page" style={{ marginBottom: 20 }}>
        <DisplayStartupNews
          pageNumber={pageNumber}
          dataPerPage={StartUpdataPerPage}
          data={StartUpdata}
        />
      </div>
      <Pagination pageCount={StartUpPageCount} setPageNumber={setPageNumber} />
    </div>
  );
}
