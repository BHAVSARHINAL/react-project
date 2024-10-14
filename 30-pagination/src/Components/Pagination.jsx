// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Pagination.css";
function Pagination() {
  const [tableData, setTableData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstPage = indexOfLastItem - rowsPerPage;
  const currentItem = tableData?.users?.slice(
    indexOfFirstPage,
    indexOfLastItem
  );
  const totalPage = Math.ceil(tableData?.total / rowsPerPage);

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=0").then((response) => {
      console.log(response);
      setTableData(response?.data);
    });
  }, []);

  const handlePrevious = ()=>{
    setCurrentPage((prev)=>Math.max(prev-1,1))
  }
  const handleNext= () =>{
    setCurrentPage((prev)=>Math.min(prev+1,totalPage))
  }
  const handlePageClick=(pageNumber)=>{
setCurrentPage(pageNumber)
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItem?.map((val, index) => (
            <tr key={index}>
              <td>{val.firstName}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage===1 }>previous</button>
        {Array.from({ length: totalPage }, (_, index) => (
          <button onClick={()=>handlePageClick(index+1)} className={currentPage===index+1 ? "active" : ""}>{index + 1}</button>
        ))}
        <button onClick={handleNext} disabled={currentPage===totalPage}>next</button>
      </div>
    </div>
  );
}

export default Pagination;
