"use client";
import CalComponent from "../../../../assests/cal";
import ColComponent from "../../../../assests/Clock";
import BookComponent from "../../../../assests/book";
import CirComponent from "../../../../assests/circle";
import UpArrow from "../../../../assests/uparrow";
import { CourseIcon } from "./Course";
import React from "react";
import ReactIcon from "../../../../assests/react";

interface Props {
  name?: string;
  des?: string;
  duration?: string;
  day?: string;
  can?: string;
  skillgap?: string;
  per?: string;
}

export default function Trend({
  name,
  des,
  duration,
  day,
  can,
  skillgap,
  per,
}: Props) {
  const icon = require("../../../../assests/icon.png");
  return (
    <div className="trend-containerrounded-sm rounded-t-2xl w-[391px] text-black bg-white rounded-xl border-2 border-gray-500" >
      <div className="w-[391px] h-[311px] ">
        <div className="w-[388px] h-[180px]">
          <CourseIcon src={icon} />
        </div>
        <div className="w-full mt-3 px-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">{name}</div>
            <div className="w-6 h-6">
              <ReactIcon />
            </div>
          </div>
          <div className="text-xs font-normal mt-2">{des}</div>

          <div className="flex text-sm justify-between mt-3 w-[320px]">
            <div className="flex w-[79px] h-[24px] justify-between">
              <div className="w-[24px] h-[24px] text-sm">
                <CalComponent />
              </div>
              <div className="mt-1">{duration}</div>
            </div>
            <div className="flex w-[99px] h-[24px] justify-evenly">
              <div className="w-[24px] h-[24px] text-sm">
                <ColComponent />
              </div>
              <div className="mt-1">{day}</div>
            </div>
            <div className="flex w-[116px] h-[24px] justify-between">
              <div className="w-[24px] h-[24px] text-sm">
                <BookComponent />
              </div>
              <div className="mt-1">{can}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[51px] items-center justify-between">
        <div className="text-sm font-normal px-4">Customizable</div>
        <div className="w-[234px] flex justify-evenly mr-2">
          <div className="flex w-[140px] justify-evenly gap-1   ">
            <div className="w-[27.88px] h-[27.88px]">
              <CirComponent />
            </div>
            <div className="text-sm mt-1">
              SkillGap: <span className="text-sm font-bold">{skillgap}</span>
            </div>

          </div>
          <div className="h-[6px] w-[6px] rounded-xl mt-3  ml-1 bg-gray-400"></div>
          <div
            className="rounded-xl h-[24px] w-[76px] flex justify-evenly text-sm items-center mt-0.5 ml-3 "
            style={{ backgroundColor: "#D5F0D5" }}
          >
            <UpArrow />
            {per}
          </div>
        </div>
      </div>
    </div>
  );
}
