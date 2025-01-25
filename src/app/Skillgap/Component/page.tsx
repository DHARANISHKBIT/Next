"use client"

import { cn } from "@heroui/theme";

interface props {
  sort:string;
  tittle:string;
  emp:string;
  col:string;
  bgcolor:string;
  textcolor:string;
    
}
export default function Card({
  sort,
  tittle,
  emp,
  bgcolor,
  textcolor
}: props) {
  return (
    <div className="flex items-center p-4">
      <div
    className={cn(
      bgcolor,
      textcolor,
      "w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold mr-4 text-sm border-1" 
    )}
  >
    {sort}
  </div>
      <div className="flex flex-col">
        <div className="text-lg font-semibold">{tittle}</div>

       <div className="flex w-[250px] gap-3">
       <div className="text-xs text-gray-500">{emp}</div>
       <div className="w-[4px] h-[4px] rounded-xl bg-gray-500 mt-1.5"></div>
        <div className="text-xs text-blue-500 ">
          View Recommendation
        </div>
       </div>
      </div>
    </div>
  );
}
