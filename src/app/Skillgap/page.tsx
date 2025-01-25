"use client";
import Dev from "./Component/page";
import Usegap from "../../../compentents/Gap/Zus";
import ProgressBar from "./Component/progress";
import { FaEye } from "react-icons/fa";
import { Pagination } from "@heroui/react";
import { useState } from "react";


export default function Page() {
  const { store }: any = Usegap();

  const [select, setSelect] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handleclick = (e: any) => {
    setSelect(e.target.value);
    setCurrentPage(1);
  }
  const totalPages = Math.ceil(store.length / select);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * select;
  const visibleItems = store.slice(startIndex, startIndex + select);



  return (
    <div className="flex-col flex justify-center items-center">
      <div className="text-xl font-bold flex justify-center mt-6">Skill gap by job profile</div>
      <div className="h-[650px]">
        <div className="w-[761px]  border-2 flex-col justify-center mt-6 rounded-md pl-2 pr-2">
          {visibleItems.map((item: any, index: number) => (
            <div className=" flex" key={item.id}>
              {select > index && (
                <div className=" w-[739px] border-b-2 flex">
                  <div className="w-[350px]">
                    <Dev
                      key={item.id}
                      sort={item.sort}
                      tittle={item.tittle}
                      emp={item.emp}
                      col={item.col}    
                      textcolor={item.textcolor}
                    />
                  </div>
                  <ProgressBar pro={item.pro} color={item.color} />
                  <div className="ml-4 mt-7">
                    <FaEye className="text-gray-400" />
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
          <div>
            <select
              className="w-71px h-20px border-1 rounded p-1 ml-2 text-sm mt-2"
              onChange={handleclick}
              value={select}
            >
              {store.map((item:any, index:any) => (
                <option value={item.key} key={item.id}>{item.num}</option>
              ))}
            </select>
          </div>
          <div className="text-sm ml-3 mt-3 ">Showing {startIndex} of {startIndex + select} records</div>
        </div>
        <div className="flex  ">
          <div className="flex">
            <Pagination classNames={{
              cursor: "bg-white border-3 border-gray-400 text-black",
              item:"bg-white",
              prev:"bg-white border-3 rounded-full ",
              next:"bg-white  border-3 rounded-full"
            }}
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
