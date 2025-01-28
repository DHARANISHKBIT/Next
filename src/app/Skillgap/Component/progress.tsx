"use client"
import { useState } from "react";
interface props {
    pro:number,
    color:string[],
}
// const  color=[ "bg-gray-500", 
//   "bg-red-500", 
//   "bg-orange-500",
//   "bg-green-500", 
//   "bg-red-500", 
//   "bg-orange-500",
//   "bg-green-500",
//   "bg-red-500",
//   "bg-orange-500",
//   "bg-green-500",
//   "bg-red-500",]

export default function ProgressBar({pro,color}:props) {
  const maxVisibleColors = 13;
 
    return (
     <div className="flex items-center">
         <div className="flex items-center h-[24px]  border-2 border-gray-300 rounded-lg">
         <div className={` font-normal text-sm border-2 border-gray-300 px-1 rounded-l-md bg-[#EDF1F5]`}
>
          {pro}%
        </div> 
        <div className="flex ml-3 w-[300px] items-center">
          {color.map((colors, index) => (
            <div
            key={index}
            className={`w-4 h-4 rounded-full ml-1 flex items-center ${colors}`}>
                </div>
          )).slice(0,13)}
           {color.length >13 && (
             <div className="text-gray-500 ml-2">+{color.length - 13}</div>
            )}
        </div>
      </div>
     </div>
    );
  }
  