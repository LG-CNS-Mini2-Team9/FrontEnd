import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CSQuestionTable from "../components/cs/CSQuestionTable";
import Pagination from "../components/global/Pagination";
import Category from "../components/global/Category";
import { mockQuestions } from "../mocks/homeData"; // mockQuestions import
// import { fetchQuestions } from "../api/CSQuestionApi"; // 실제 API 호출은 주석 처리 또는 제거

const CSQuestionBoard = () => {
  const [questions, setQuestions] = useState([]);
  const PAGE_SIZE = 10; // 한 페이지에 표시할 항목 수 (목업 데이터용)
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = parseInt(params.get("page")) || 1;
    const categoryParam = params.get("category") || "";

    setPage(pageParam);
    setCategory(categoryParam);

    // --- 목업 데이터 사용 로직 시작 ---
    let filteredQuestions = mockQuestions;

    // 카테고리 필터링 (categoryParam이 '전체'가 아니거나 비어있지 않을 경우)
    if (categoryParam && categoryParam !== "전체") {
      filteredQuestions = mockQuestions.filter(
        (q) => q.category === categoryParam
      );
    }

    // 페이지네이션 로직
    const totalMockPages = Math.ceil(filteredQuestions.length / PAGE_SIZE);
    setTotalPages(totalMockPages === 0 ? 1 : totalMockPages); // 최소 1페이지 보장

    const startIndex = (pageParam - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedQuestions = filteredQuestions.slice(startIndex, endIndex);

    setQuestions(paginatedQuestions);
    // --- 목업 데이터 사용 로직 끝 ---
  }, [location.search]);
  const handleSelectCategory = (e) => {
    setCategory(e.target.value);
    navigate(
      `/questions?page=1&category=${encodeURIComponent(e.target.value)}`
    );
  };
  return (
    <div className="px-120">
      <div className="flex items-center gap-12 my-24 text-white">
        <p>카테고리</p>
        <Category value={category} onChange={(e) => handleSelectCategory(e)} />
      </div>
      {/* 게시판 */}
      <CSQuestionTable questions={questions} />

      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        category={category}
      />
    </div>
  );
};

export default CSQuestionBoard;
