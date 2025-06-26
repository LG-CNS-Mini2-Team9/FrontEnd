import React from "react";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import CategoryChip from "../global/CategoryChip";

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
    <div className="w-full h-[420px] bg-background-light rounded-lg shadow-[0px_0px_15px_0px_rgba(0,0,0,0.2)] border-1 border-gray-300/10">
      {/* header */}
      <div className="relative w-full h-42 flex items-center justify-center px-24 border-b-1 border-gray-300/10">
        {/* circles */}
        <div className="absolute left-24 flex gap-6 items-center">
          <Circle color="primary" />
          <Circle color="secondary" />
          <Circle color="gray-100" />
        </div>

        {/* search */}
        <div className="w-270 py-4 bg-gray-700 rounded-[5px] flex items-center px-12 border-1 border-gray-300/10">
          <p className="flex-grow text-center text-sm text-gray-300">{formattedDate}</p>
          <img src={search} alt="search" />
        </div>
      </div>

      {/* content */}
      <div className="py-16 flex flex-col items-center px-48 h-318 bg-gradient-to-b from-background-dark to-background-light rounded-b-lg gap-24">
        <span className="text-base text-center text-gray-300 font-base border-b-1 border-gray-300 pb-2">
          오늘의 추천 CS 질문
        </span>

        {todayQuestion ? (
          <div className="flex-grow flex flex-col items-center text-center pt-8">
            <CategoryChip category={todayQuestion.category} />
            {/* 질문과 버튼을 그룹화하여 남은 공간에 중앙 정렬합니다. */}
            <div className="flex-grow flex flex-col items-center justify-center gap-48 mt-24">
              <p className="text-5xl font-semibold text-primary text-shadow-[2px_2px_10px_rgb(0_0_0_/_0.15)] leading-tight">
                {todayQuestion.content}
              </p>
              {/* isSubmitted 여부에 따라 버튼 텍스트 및 링크 변경 */}
              {todayQuestion.isSubmitted ? (
                <Link
                  to={`/answers/my/${todayQuestion.id}`} // 내 답변 보기 페이지로 이동
                  className="items-center px-50 py-16 text-lg rounded-[10px] text-white bg-gray-500"
                >
                  제출한 답변 보기
                </Link>
              ) : (
                <Link
                  to={`/questions/detail/${todayQuestion.id}`}
                  className="items-center px-50 py-16 text-lg rounded-[10px] text-white gradient-blue"
                >
                  답변 작성하기
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-400">추천 질문을 불러오는 중입니다...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Window;
