//import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import Nav from "../components/global/Nav";
import BigButton from "../components/global/BigButton";
import { Link } from "react-router-dom";
import Window from "../components/home/Window";
//import { fetchQuestions, fetchRecommendQuestion } from "../api/CSQuestionApi";
import CSQuestionTable from "../components/cs/CSQuestionTable";
import { mockQuestions, mockRecommendedQuestion } from "../mocks/homeData";


const Home = () => {
  // const [recommendedQuestion, setRecommendedQuestion] = useState(null);
  // const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   fetchRecommendQuestion().then((data) => setRecommendedQuestion(data));
  //   fetchQuestions(1).then((data) => setQuestions(data.content));
  // }, []);

  const [recommendedQuestion, setRecommendedQuestion] = useState(
    mockRecommendedQuestion || null
  );
  const [questions, setQuestions] = useState(mockQuestions || []);

  return (
    <div className="flex flex-col justify-center bg-gradient-to-br from-background-base to-white/10">
      {/* gradient */}
      {/* Window와 하단 질문 리스트의 가로 폭을 맞추기 위해 px-120을 추가합니다. */}
      <div className="w-full py-50 flex flex-col items-center px-120">
        <Window todayQuestion={recommendedQuestion} />
      </div>

      <div className="px-120 mt-12">
        <div className="bg-gradient-to-b from-background-dark to-background-light rounded-lg px-16 py-24 text-center">
          <p className="text-gray-300">매일 자정에 카테고리 별로 새로운 문제가 생성됩니다.</p>
        </div>
      </div>

      {/* CS 면접 질문 리스트 */}
      <div className="px-120 mb-120 flex flex-col mt-48">
        <Link className="text-xl text-primary font-semibold" to='/questions'>CS 면접 질문 리스트</Link>
        <CSQuestionTable questions={questions} />
      </div>
    </div>
  );
};

export default Home;
