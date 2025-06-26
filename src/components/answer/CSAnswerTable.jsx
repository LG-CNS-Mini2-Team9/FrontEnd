import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryChip from "../global/CategoryChip";
import NotSolvedModal from "./NotSolvedModal";
import { useNavigate } from "react-router-dom";

const CSAnswerTable = ({ answers }) => {
  const thStyle = "font-medium py-10 text-white";
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClickAnswer = (answerId) => {
    // 푼 문제인지 검사
    const isSolved = true;

    if (!isSolved) {
      setShowModal(true);
    } else {
      navigate(`/answers/detail/${answerId}`);
    }
  };

  return (
    <div>
      <div className="h-600 mt-24">
        <table className="w-full text-white">
          <thead>
            <tr className="rounded-[5px] bg-background-light">
              <th className={`${thStyle} rounded-l-[5px] w-70`}>번호</th>
              <th className={`${thStyle} w-90`}>카테고리</th>
              <th className={`${thStyle} text-start pl-20`}>문제</th>
              <th className={`${thStyle} w-70`}>점수</th>
              <th className={`${thStyle} w-130`}>날짜</th>
              <th className={`${thStyle} rounded-r-[5px] w-70`}>작성자</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer) => {
              return (
                <tr
                  key={answer.id}
                  className="h-48 text-center border-b-1 border-gray-300/10 hover:bg-background-light"
                >
                  <td>{answer.id}</td>
                  <td className="text-center px-10">
                    <CategoryChip category={answer.category} />
                  </td>
                  <td
                    className="text-start pl-20 cursor-pointer"
                    onClick={() => handleClickAnswer(answer.id)}
                  >
                    {answer.content}
                  </td>
                  <td>{answer.score}점</td>
                  <td>{answer.createdAt.substring(0, 10)}</td>
                  <td>{answer.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showModal && <NotSolvedModal setShowModal={setShowModal} />}
    </div>
  );
};

export default CSAnswerTable;
