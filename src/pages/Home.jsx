import React, { useEffect, useState } from "react";
import Nav from "../components/global/Nav";
import BigButton from "../components/global/BigButton";
import { Link } from "react-router-dom";
import Window from "../components/home/Window";
import { fetchQuestions, fetchTodayQuestion } from "../api/CSQuestionApi";
import CSQuestionTable from "../components/cs/CSQuestionTable";

const Home = () => {
  const [todayQuestion, setTodayQuestion] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    fetchTodayQuestion().then((data)=>setTodayQuestion(data));
    fetchQuestions(1).then((data)=>setQuestions(data.content));
  },[]);

  return (
    <div className="flex flex-col justify-center bg-gradient-to-br from-background-base to-white/10">
      {/* gradient */}
      <div className="w-full py-50 flex flex-col justify-center items-center">
        <Window todayQuestion={todayQuestion}/>

        <div className="flex justify-center">
          <Link className="items-center px-50 py-16 text-lg rounded-[10px] text-white gradient-blue" >
            답변 작성하기
          </Link>
        </div>
      </div>

      <p className="text-gray-500 text-center py-24">
        매일 새로운 문제가 생성됩니다.
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
