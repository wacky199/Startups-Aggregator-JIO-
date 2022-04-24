import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination(props) {
  const changePage = ({ selected }) => {
    props.setPageNumber(selected);
  };
  return (
    <ReactPaginate
      previousLabel={"<prev"}
      nextLabel={"next>"}
      pageCount={props.pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"prevBttn"}
      nextLinkClassName={"prevBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    ></ReactPaginate>
  );
}
