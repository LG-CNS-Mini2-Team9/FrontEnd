import axios from "axios";

//특정 답변 조회
export const getAnswer = async (answerId) => {
  const accessToken = localStorage.getItem("accessToken");

  // try {
  //   const res = await axios.get(`/api/answer/${answerId}`, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   console.log(res.data);
  //   return res;
  // } catch (e) {
  //   console.log(e);
  // }

  const res = {
    csanswer_id:2,
    csquestion_id:1,
    csquestion_category:"알고리즘",
    csquestion_content:"문제문제",
    csanswer_content:"답변답변",
    csanswer_createdAt:"2025-05-21",
    user_nickname:"lgcns",
    user_id:1,
  }
  console.log(res);
  return res;

};

// AI 피드백 요청
export const requestFeedback = async (answerId) => {
  const accessToken = localStorage.getItem("accessToken");
  // try {
  //   const res = await axios.post(
  //     `/api/api/answers/${answerId}`,
  //     {},
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`
  //       },
  //     }
  //   );
  //   console.log("requestFeedback 응답:", res.data);
  //   return res.data;
  // } catch (e) {
  //   console.error("requestFeedback 에러:", e);
  //   throw e;
  // }

  const feedback = {
    content:"fff",
    score:83
  }
  return feedback;
};


// 답변 수정 요청
export const editAnswer = async (answerId, content) => {
  const accessToken = localStorage.getItem("accessToken");
  console.log(content);
  try {
    const res = await axios.post(
      `/api/answer/${answerId}/edit`,
      { csanswer_content: content },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

  } catch (e) {
    console.log(e);
  }
};

//답변 삭제 요청
export const deleteAnswer = async (answerId) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(
      `/api/answer/${answerId}/delete`,{},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
};

const AnswerResultapi = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AnswerResultapi;
