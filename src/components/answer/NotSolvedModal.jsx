import React from "react";
import x from "../../assets/x.svg";
import noAccess from "../../assets/noAccess.png";
import GradientButton from "../global/GradientButton";
import { useNavigate } from "react-router-dom";

const NotSolvedModal = ({ questionId, setShowModal }) => {
    const navigate = useNavigate();

    const handleClose = ()=>{
        setShowModal(false);
    }

    const handleClickButton = ()=>{
        navigate(`/questions/detail/${questionId}`);
    }
  return (
    <div className="bg-background-dark/80 absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="text-center w-500 h-520 rounded-xl p-16 bg-background-base border-1 border-gray-300/10 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.15)]">
        {/* x */}
        <div className="flex justify-end" onClick={handleClose}>
          <img src={x} alt="x" />
        </div>

        <h2 className="text-3xl text-error font-semibold text-center py-24 mb-16">
          접근이 제한되었습니다
        </h2>

        <div className="rounded-xl border-1 border-gray-300/10 bg-error/10 p-20 flex flex-col justify-center items-center h-240 mb-36">
          <img src={noAccess} alt="" width="64px" height="64px" />
          <p className="text-error text-xl font-semibold pt-8 pb-16">
            문제 No.{questionId} 미완료
          </p>
          <p className="text-white text-sm">문제를 풀지 않았어요!</p>
          <p className="text-white text-sm">
            문제를 푼 다음에 다른 사용자의 답변을 조회할 수 있어요.
          </p>
        </div>

        <GradientButton text="문제 풀러 가기 →" width="464px" onClick={handleClickButton}/>
      </div>
    </div>
  );
};

export default NotSolvedModal;
