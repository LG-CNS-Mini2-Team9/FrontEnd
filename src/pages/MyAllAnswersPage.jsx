import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { fetchMyAllAnswers } from "../api/myAnswersApi";
import CSAnswerTable from "../components/answer/CSAnswerTable";
import Pagination from "../components/global/Pagination";
import Category from "../components/global/Category";

const MyAllAnswersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [answers, setAnswers] = useState([]);
  const [filteredAnswers, setFilteredAnswers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);

  const PAGE_SIZE = 10;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = parseInt(params.get("page")) || 1;

    setPage(pageParam);

    fetchMyAllAnswers(pageParam)
      .then((data) => {
        console.log(data);
        setAnswers(data);
        setFilteredAnswers(data);
      })
      .catch((err) => console.error("내 답변 조회 실패:", err));
  }, [location.search]);

  const handleSelectCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (category === "전체") {
      setFilteredAnswers(answers);
    } else {
      const list = answers.filter((answer) => {
        return answer.category === category;
      });
      setFilteredAnswers(list);
    }
  }, [category]);

  return (
    <div className="px-120">
      {/* ─── 내 답변 목록 ───────────────────────── */}
      {/* 카테고리 필터링 */}
      <div className="flex items-center gap-12 my-24 text-white">
        <p>카테고리</p>
        <Category value={category} onChange={(e) => handleSelectCategory(e)} />
      </div>

      <CSAnswerTable answers={filteredAnswers} />

      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        category={category}
      />
    </div>
  );
};

export default MyAllAnswersPage;
