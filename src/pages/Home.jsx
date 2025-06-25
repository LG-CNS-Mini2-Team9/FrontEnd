import React, { useEffect, useState } from "react";
import Nav from "../components/global/Nav";
import BigButton from "../components/global/BigButton";
import { Link } from "react-router-dom";
import Window from "../components/home/Window";
import { fetchQuestions, fetchRecommendQuestion } from "../api/CSQuestionApi";
import CSQuestionTable from "../components/cs/CSQuestionTable";

const Home = () => {
  const [recommendedQuestion, setRecommendedQuestion] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchRecommendQuestion().then((data) => setRecommendedQuestion(data));
    fetchQuestions(1).then((data) => setQuestions(data.content));
  }, []);

  return (
    <div className="flex flex-col justify-center bg-gradient-to-br from-background-base to-white/10">
      {/* gradient */}
      {/* Window와 하단 질문 리스트의 가로 폭을 맞추기 위해 px-120을 추가합니다. */}
      <div className="w-full py-50 flex flex-col items-center px-120">
        <Window todayQuestion={recommendedQuestion} />

        {/* 추천 문제가 있을 경우에만 답변 작성하기 버튼을 보여주고, 해당 문제 상세 페이지로 연결합니다. */}
        {recommendedQuestion && (
          <Link
            to={`/questions/detail/${recommendedQuestion.id}`}
            className="items-center px-50 py-16 text-lg rounded-[10px] text-white gradient-blue"
          >
            답변 작성하기
          </Link>
        )}
      </div>

      <p className="text-gray-500 text-center py-24">
        매일 카테고리 별로 새로운 문제가 생성됩니다.
      </p>

      {/* CS 면접 질문 리스트 */}
      <div className="px-120 mb-120 flex flex-col gap-24">
        <Link className="text-xl text-primary font-semibold" to='/questions'>CS 면접 질문 리스트</Link>
        <CSQuestionTable questions={questions} />
      </div>
    </div>
  );
};

export default Home;
