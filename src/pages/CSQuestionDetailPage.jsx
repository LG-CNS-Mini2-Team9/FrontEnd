import React, { useState, useEffect } from "react";
import CSAnswerEditor from "../components/cs/CSAnswerEditor";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import BigButton from "../components/global/BigButton";
import { fetchQuestionById } from "../api/CSQuestionApi";
import Tab from "../components/global/Tab";
import { editAnswer } from "../api/AnswerResultApi";
import CategoryChip from "../components/global/CategoryChip";


const CSQuestionDetailPage = () => {
  const [question, setQuestion] = useState();
  const { questionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const editState = location.state;
  const isEditMode = !!editState?.csanswer_id;
  const [content, setContent] = useState(editState?.csanswer_content || "");

  const postAnswer = async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken == null) {
      alert("로그인이 필요합니다.");
      navigate("/auth");
      return;
    }

    try {
      const res = await axios.post(
        "/api/answers/v1",
        {
          csquestion_id: questionId,
          csanswer_content: content,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const csanswer_id = res.data.result.csanswer_id;
      navigate(`/answer/${csanswer_id}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleEditAnswer = () => {
    editAnswer(editState.csanswer_id, content).then(()=>
      navigate(`/answer/${editState.csanswer_id}`)
    );
  };

  useEffect(() => {
    fetchQuestionById(questionId).then((data) => setQuestion(data));
  }, []);

  return (
    <div className="px-120">
      {/* tab */}
      <Tab questionId={questionId} />

      {/* 문제 */}
      {question && (
        <div>
          <CategoryChip category={question.category} />
          <p className="text-2xl text-white pt-16 pb-24 border-b-1 border-gray-300 mb-36">
            {question.content}
          </p>
        </div>
      )}

      {/* 작성 */}
      <CSAnswerEditor content={content} setContent={setContent} />

      <div className="flex justify-end py-24">
        {isEditMode ? (
          <BigButton text="수정" fill onClick={handleEditAnswer} />
        ) : (
          <BigButton text="제출" fill onClick={postAnswer} />
        )}
      </div>
    </div>
  );
};

export default CSQuestionDetailPage;
