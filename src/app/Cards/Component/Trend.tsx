"use client";
import CalComponent from "../../../../assests/cal";
import SvgComponent from "../../../../assests/react";
import ColComponent from "../../../../assests/Clock";
import BookComponent from "../../../../assests/book";
import CirComponent from "../../../../assests/circle";
import UpArrow from "../../../../assests/uparrow";
import icon from "../../../../assests/icon.png";
import { CourseIcon } from "./Course";

interface Props {
  title: string;
  des: string;
  duration: string;
  day: string;
  can: string;
  circle: string;
  skillgap: string;
  per: string;
}

export default function Trend({
  title,
  des,
  duration,
  day,
  can,
  skillgap,
  per,
}: Props) {
    const icon = require("../../../../assests/icon.png");
  return (
    <div className="trend-container bg-gray-200 rounded-md" >
      <div className="w-[391px] h-[311px] bg-white rounded border-2">
        <div className="w-[388px] h-[180px]">
        <CourseIcon src={icon} />
        </div>
        <div className="w-full mt-2 px-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">{title}</div>
            <div className="w-6 h-6">
              <SvgComponent />
            </div>
          </div>
          <div className="text-xs font-normal mt-2">{des}</div>

          <div className="flex text-sm justify-between mt-2 w-[320px]">
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
        <div className="text-sm font-normal px-3">Customizable</div>
        <div className="w-[234px] flex justify-evenly mr-2">
          <div className="flex w-[140px] justify-evenly gap-1">
            <div className="w-[27.88px] h-[27.88px]">
              <CirComponent />
            </div>
            <div className="text-sm mt-1">
              SkillGap: <span className="text-sm">{skillgap}</span>
            </div>
            {/* <div
              className="h-[6px] w-[6px] rounded-xl mt-3"
              style={{ backgroundColor: "#CDD7E1" }}
            ></div> */}
            <div className="h-[6px] w-[6px] rounded-xl mt-3  ml-1 bg-gray-400"></div>
          </div>
          <div
            className="rounded-xl h-[24px] w-[76px] flex justify-evenly text-sm items-center mt-0 ml-3 "
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
