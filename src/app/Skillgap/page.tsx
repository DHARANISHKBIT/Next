"use client";
import Dev from "./Component/page";
import Usegap from "../../../compentents/Gap/Zus";
import ProgressBar from "./Component/progress";
import { FaEye } from "react-icons/fa";
import {Pagination} from "@heroui/react"; 
import { useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";



export default function Page() {
  const { store }:any = Usegap();

  const [select,setSelect] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleclick = (e:any)=> {
    setSelect(e.target.value);
    setCurrentPage(1);
  }
  const totalPages = Math.ceil(store.length / select);
  console.log(select)
  console.log(store.length)


  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * select;
  const visibleItems = store.slice(startIndex, startIndex + select);

  

  return (
    <div className="flex-col flex justify-center items-center">
      <div className="text-xl font-bold flex justify-center mt-6">Skill gap by job profile</div>
      <div className="h-[650px]">
      <div className="w-[761px]  border-2 flex-col justify-center mt-6 rounded-md pl-2 pr-2">
      {visibleItems.map((item:any, index:number) => (


        <div className=" flex">
          {select > index && (
         <div  className=" w-[739px] border-b-2 flex">
          <div className="w-[350px]">
         <Dev
          key={index}
          sort={item.sort}
          tittle={item.tittle}
          emp={item.emp}
          col={item.col}
          />
         </div>
          <ProgressBar pro={item.pro} color={item.color} />
          <div className="ml-4 mt-7">
          <FaEye className="text-gray-400"/>
            </div>
          </div>
)}
          </div>
      ))}
      </div>
      </div>
    <div className="flex mt-3 w-[761px] justify-between">
      <div className="flex ">
      <div className="text-xs mt-3">Show Roles</div>
      <select
  className="w-71px h-16px border-1 rounded pl-1 ml-2 text-sm"
  onChange={handleclick}
  value={select}
>
  <option value={5}>5 / page</option>
  <option value={10}>10 / page</option>
  <option value={15}>15 / page</option>
  <option value={20}>20 / page</option>
</select>
<div className="text-sm ml-3 mt-3">Showing {startIndex} of {startIndex+select} records</div>
      </div>
    <div className="flex  ">
    <div className="flex">
          <Pagination
          
            showControls
            initialPage={currentPage}
            total={totalPages}
            onChange={handlePageChange} 
          />

     </div>
    </div>
    </div>
    </div>
  );
}
