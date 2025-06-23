import React from "react";
import search from "../../assets/search.svg";

const Circle = ({ color }) => {
  return (
    <div
      className="rounded-full w-12 h-12"
      style={{ background: `var(--color-${color})` }}
    ></div>
  );
};

const Window = ({ todayQuestion }) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;


  return (
    <div className="w-640 h-362 bg-background-light rounded-lg shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] mb-50 border-1 border-gray-300/10">
      {/* header */}
      <div className="w-full h-42 flex items-center px-24 border-b-1 border-gray-300/10">
        {/* circles */}
        <div className="flex gap-6 items-center pr-117">
          <Circle color="primary" />
          <Circle color="secondary" />
          <Circle color="gray-100" />
        </div>

        {/* search */}
        <div className="w-270 py-4 bg-gray-700 rounded-[5px] flex justify-end px-12 border-1 border-gray-300/10">
          <p className="text-center text-sm text-gray-300">{formattedDate}</p>
          <img src={search} alt="search" className="pl-60" />
        </div>
      </div>

      {/* content */}
      <div className="py-16 flex flex-col items-center px-48 h-318 bg-gradient-to-b from-background-dark to-background-light rounded-b-lg">
        <span className="text-base text-center text-gray-300 font-base border-b-1 border-gray-300">
          오늘의 CS 질문
        </span>

        {todayQuestion && (
          <p className="h-240 flex items-center text-center text-5xl font-semibold text-primary text-shadow-[2px_2px_10px_rgb(0_0_0_/_0.15)] leading-60">
            {todayQuestion.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default Window;
