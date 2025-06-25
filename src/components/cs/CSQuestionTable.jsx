import React from "react";
import { Link } from "react-router-dom";
import CategoryChip from "../global/CategoryChip";

const CSQuestionTable = ({ questions }) => {
  const thStyle = "font-medium py-10 text-white";

  return (
    <div className="h-600 mt-24">
      {/* table-fixed를 추가하여 컬럼 너비를 고정하고, text-white로 기본 텍스트 색상 변경 */}
      <table className="w-full text-white">
        <thead>
          <tr className="rounded-[5px] text-center bg-background-light">
            {/* 컬럼 너비를 CSAnswerTable 기준으로 조정 */}
            <th className={`${thStyle} rounded-l-[5px] w-70`}>번호</th>
            <th className={`${thStyle} w-90`}>카테고리</th>
            <th className={`${thStyle} text-start pl-20`}>문제</th>
            <th className={`${thStyle} w-130`}>날짜</th>
            <th className={`${thStyle} rounded-r-[5px] w-90`}>정보</th>
          </tr>
        </thead>
        <tbody>
          {questions?.map((q) => (
            <tr
              key={q.id}
              className="h-48 text-center border-b border-gray-300/10 hover:bg-background-light"
            >
              <td className="p-2">{q.id}</td>
              <td className="p-2">
                <CategoryChip category={q.category} />
              </td>
              <td className="p-2 text-start pl-20 truncate">
                <Link to={`/questions/detail/${q.id}`}>{q.content}</Link>
              </td>
              <td className="p-2">{q.createdAt.substring(0, 10)}</td>
              <td className="p-2">
                <p
                  className="text-white w-48 h-28 flex justify-center items-center rounded-sm text-sm mx-auto"
                  style={{
                    backgroundColor: `${
                      q.isSubmitted
                        ? "var(--color-primary)"
                        : "var(--color-gray-700)"
                    }`,
                  }}
                >
                  {q.isSubmitted ? "제출" : "미제출"}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSQuestionTable;
