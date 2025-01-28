"use client";
import { useState } from "react";
import useTrend from "../../../compentents/Store/Zustand";
import Button from "./Component/button";
import Trend from "./Component/Trend";
import { SlBookOpen } from "react-icons/sl";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Coding = [
  { nam: "HTML" },
  { nam: "CSS" },
  { nam: "JavaScript" },
  { nam: "React" },
  { nam: "CSS" },
  { nam: "JavaScript" },
  { nam: "React" },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { store } = useTrend();
  const Changecolor = () => {

  }

  return (
    <div className="flex flex-wrap gap-4 overflow-hidden justify-center items-center h-[765px]">
      <div className="relative">
        <img src='https://images.pexels.com/photos/5905887/pexels-photo-5905887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className="w-[1490px] h-[765px] rounded-xl overflow-hidden" />
        <div className="absolute top-0 p-16 text-white">
          <div className="text-3xl font-bold mt-[20px]">Full Stack Development</div>
          <div className="w-[521px] text-base font-semibold mt-[11px]">
            Master end-to-end development, building scalable web applications with
            front-end, back-end, and database integration skills.
          </div>

          <div className="flex gap-4 mt-[11px] ">
            {Coding.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex h-[24px] justify-center items-center rounded-xl bg-[#32363F] px-2 text-sm text-white"
              >
                {item.nam}
              </div>
            ))}
            {Coding.length > 3 && (
              <div className="flex h-[24px] justify-center items-center rounded-xl bg-[#32363F] px-2 text-sm text-white">
                +{Coding.length - 3} more
              </div>
            )}
          </div>

          <div className="mt-[24px] flex gap-2">
            <Button name="Preview Course" color="#FF7014" text="#FFFFFF" />
            <Button name="View Details" color="#FFFFFF" />
          </div>

          <div className="flex gap-2 items-center justify-center w-[1300px] mt-[122px] cursor-pointer">
            <div className="w-10 h-1 rounded-md " onClick={() => setActiveIndex(0)} style={{ backgroundColor: activeIndex === 0 ? "white" : "gray" }}></div>
            <div className="w-10 h-1 rounded-md" onClick={() => setActiveIndex(1)} style={{ backgroundColor: activeIndex === 1 ? "white" : "gray" }}></div>
            <div className="w-10 h-1 rounded-md" onClick={() => setActiveIndex(2)} style={{ backgroundColor: activeIndex === 2 ? "white" : "gray" }}></div>
            <div className="w-10 h-1 rounded-md" onClick={() => setActiveIndex(3)} style={{ backgroundColor: activeIndex === 3 ? "white" : "gray" }}></div>
          </div>

          <div className="flex w-[1340px] justify-between mt-[24px]">
            <div className="text-xl font-bold text-black">Based on market trend</div>
            <div className="flex h-50px items-center gap-2">
              <div className="text-[#FF7014]"><SlBookOpen /></div>
              <div className="text-base text-black font-bold">15 Curriculum</div>
              <div className="h-[34px] w-[34px] rounded-full bg-white text-[#636B74] flex justify-center items-center"><FaAngleLeft /></div>
              <div className="h-[34px] w-[34px] rounded-full bg-white text-[#636B74] flex justify-center items-center"><FaAngleRight /></div>
            </div>
          </div>
          <div className="mt-[28px] gap-20 flex shadow-[white]">
            {store.map((item, index) => (
              <Trend
                key={item.id}
                name={item.name}
                des={item.des}
                duration={item.duration}
                day={item.day}
                can={item.can}
                skillgap={item.skillgap}
                per={item.per}
              />
            ))}
          </div>
        </div>

      </div>





    </div>
  );
}
