import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {
  getAnswer,
  requestFeedback,
  deleteAnswer,
} from "../api/AnswerResultApi";
import Tab from "../components/global/Tab";
import BigButton from "../components/global/BigButton";
import CategoryChip from "../components/global/CategoryChip";
import heart from "../assets/heart.svg";
import heartFill from "../assets/heartFill.svg";

export default function AnswerResultPage() {
  const { answerId } = useParams();
  const [result, setResult] = useState();
  const [feedback, setFeedback] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("userId");
  const [isLiked, setIsLiked] = useState(false);
  const[likeCount, setLikeCount] = useState(3);

  // useEffect(() => {
  //   if (result) return;

  //   getAnswer(3)
  //     .then((res) => {
  //       console.log(res);
  //       setResult(res);
  //       // if (res.data.isSuccess) {
  //       //   // setResult(res.data.result);
  //       // } else {
  //       //   alert(res.data.message);
  //       //   navigate(-1);
  //       // }
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert("데이터 로딩 중 에러가 발생했습니다.");
  //       navigate(-1);
  //     });
  // }, [answerId, result, navigate]);

  useEffect(() => {
    getAnswer(answerId)
      .then((data) => {
        console.log(data);
        setResult(data);
        requestFeedback(answerId).then((data)=>{
          setFeedback(data);
        }).catch((err)=>{
          console.log(err);
        })
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!result || !feedback) {
    return (
      <section className="max-w-5xl mx-auto p-6 text-center">
        로딩 중...
      </section>
    );
  }


  const handleEdit = () => {
    navigate(`/questions/detail/${result.csanswer_id}`, {
      state: {
        csquestion_id:result.csquestion_id,
        csquestion_category:result.csquestion_category,
        csquestion_content:result.csquestion_content,
        csanswer_id:result.csanswer_id,
        csanswer_content:result.csanswer_content,
      },
    });
  };

  const handleDelete = () => {
    deleteAnswer(answerId).then(() => {
      alert("답변이 삭제되었습니다.");
      navigate(`/questions/detail/${result.csquestion_id}`);
    });
  };

  const parseBold = (text) => {
    const parts = text.split(/(\*\*.+?\*\*)/g);

    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={idx}>{part.slice(2, -2)}</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  const handleClickLike = ()=>{
    setIsLiked(!isLiked);
    if(isLiked){
      setLikeCount(likeCount-1);
    }else{
      setLikeCount(likeCount+1);

    }
  }

  return (
    <div className="px-120 text-white">
      <Tab questionId={result.csquestion_id} />

      {/* ─── 문제 본문 ───────────────────────── */}
      <div className="border-b-1 border-gray-300/10 mb-36">
        <CategoryChip category={result.csquestion_category} />
        <h2 className="text-2xl pt-16 pb-24">{result.csquestion_content}</h2>
        <p className="text-sm mb-6">
          {result.author}{" "}
          <span className="text-xs text-gray-300">
            {result.csanswer_createdAt}
          </span>
        </p>
      </div>

      {/* ─── 답변 ───────────────────────── */}
      <h3 className="text-lg mb-16 text-primary">답변</h3>
      <div
        className="border-1 rounded-lg p-12 mb-48 min-h-160 border-gray-300/20"
        dangerouslySetInnerHTML={{ __html: result.csanswer_content }}
      ></div>

      {/* ─── AI 피드백 ───────────────────────── */}
      {feedback && (
        <div className="mb-60">
          <h3 className="text-lg mb-16 text-primary flex justify-between">
            AI 피드백 <span>{feedback.score}점</span>
          </h3>

          <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-300 border-1 border-gray-300/20 rounded-lg p-12 mb-24">
            {parseBold(feedback.content)}
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <div onClick={handleClickLike} className="h-20 flex gap-12 items-center text-gray-300">
          {isLiked ? (
            <img src={heartFill} alt="" />
          ) : (
            <img src={heart} alt="" />
          )}

          <p>{likeCount}</p>
        </div>

        {/* ─── 수정 / 삭제 ───────────────────────── */}
        {userId == result.user_id && (
          <div className="flex gap-8 justify-end mb-60">
            <BigButton onClick={handleEdit} text="수정" fill />
            <BigButton onClick={handleDelete} text="삭제" />
          </div>
        )}
      </div>
    </div>
  );
}

// function Tab({ to, label, active = false }) {
//   return (
//     <Link
//       to={to}
//       className={`inline-block px-8 py-6 min-w-[80px] text-center text-lg font-medium ${
//         active
//           ? "text-blue-600 border-b-2 border-blue-600"
//           : "text-gray-500 hover:text-blue-600"
//       }`}
//     >
//       {label}
//     </Link>
//   );
// }
