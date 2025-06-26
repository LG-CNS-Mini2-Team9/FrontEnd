import React from "react";

export default function Category({
  value,
  onChange,
  options = [
    "전체",
    "자료구조",
    "컴퓨터구조",
    "운영체제",
    "데이터베이스",
    "네트워크",
    "소프트웨어공학",
    "알고리즘",
    "디자인패턴",
    "웹프론트엔드",
    "웹백엔드",
    "클라우드",
  ],
  className = "",
  ...rest
}) {
  return (
    <>
      <select
        value={value}
        onChange={onChange}
        className={
          "w-150 border border-gray-300/10 rounded-lg p-8 " +
          "focus:ring-2 focus:ring-secondary focus:outline-none" +
          className
        }
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-base text-gray-900">
            {opt}
          </option>
        ))}
      </select>
    </>
  );
}
