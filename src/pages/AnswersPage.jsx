import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { fetchAllAnswers } from "../api/myAnswersApi";
import Tab from "../components/global/Tab";
import Pagination from "../components/global/Pagination";
import CSAnswerTable from "../components/answer/CSAnswerTable";

export default function AnswersPage() {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = parseInt(params.get("page")) || 1;
    setPage(pageParam);

    fetchAllAnswers(pageParam, questionId)
      .then((data) => {
        console.log(data);
        setAnswers(data);
      })
      .catch((err) => console.error("내 답변 조회 실패:", err));
  }, [location.search]);


  return (
    <div className="px-120">
      {/* ─── 상단 탭 ───────────────────────── */}
      <Tab questionId={questionId} />

      {/* ─── 내 답변 목록 ───────────────────────── */}
      <CSAnswerTable answers={answers} />

      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}