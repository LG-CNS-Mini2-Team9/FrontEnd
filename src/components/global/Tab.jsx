import React from "react";
import { Link, useLocation } from "react-router-dom";

function AnswerTab({ to, label, active = false, state }) {
  return (
    <Link
      to={to}
      state={state}
      className={`inline-block px-24 py-8 min-w-[80px] text-center text-base font-medium
        ${active
          ? "text-primary border-b-2 border-primary"
          : "text-white hover:text-primary"
        }`}
    >
      {label}
    </Link>
  );
}

const Tab = ({ questionId  }) => {
  const location = useLocation();


  return (
    <nav className="mt-24 mb-16">
      <>
        <AnswerTab
          to={`/questions/detail/${questionId}`}
          label={questionId+"번"}
          active={location.pathname.includes("/detail/")}
        />
        <AnswerTab
          to={`/answers/my/${questionId}`}
          label="내 답변"
          active={location.pathname.includes("/answers/my")}
        />
        <AnswerTab
          to={`/answers/all/${questionId}`}
          label="전체 답변"
          active={location.pathname.includes("/answers/all")}
        />
      </>
    </nav>
  );
};

export default Tab;