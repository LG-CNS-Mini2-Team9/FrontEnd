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
    csquestion_id:2,
    csquestion_category:"알고리즘",
    csquestion_content:"TCP/IP의 개념을 설명하세요",
    csanswer_content:"TCP/IP는 인터넷 통신의 핵심 프로토콜 집합으로, 컴퓨터들이 네트워크를 통해 데이터를 정확하고 효율적으로 주고받도록 설계된 규약 체계이다.",
    csanswer_createdAt:"2025-06-24",
    author:"user1",
    user_id:1,
    score:85
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
    score:88
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
