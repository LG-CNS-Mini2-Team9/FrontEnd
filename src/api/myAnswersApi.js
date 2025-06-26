import axios from "axios";

/**
 * @param {number} page
 * @param {string} questionId
 * @returns {Promise<{ content: any[], totalPages: number }>}
 */
export const fetchAllAnswers = async (page = 1, questionId) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await axios.get(`/api/answers/v1/${questionId}`, {
    params: {
      page
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return {
    content: res.data.result.content,
    totalPages: res.data.result.totalPages,
  };


};

export const fetchMyAnswers = async (page = 1, questionId) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await axios.get("/api/answers/answers/my", {
    params: {
      page,
      questionId: questionId
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return {
    content: res.data.result.content,
    totalPages: res.data.result.totalPages,
  };

};


export const fetchMyAllAnswers = async (page = 1) =>{
   const accessToken = localStorage.getItem("accessToken");
   const res = await axios.get("/api/api/answers/test", {
  params: { page },
  headers: {
    Authorization: `Bearer ${accessToken}`,
    // "X-Auth-UserId": 1
  }
});
//   const res = await axios.get("/api/answers/my", {
//     params: {
//       page
//     },
//     headers: {
//     Authorization: `Bearer ${accessToken}`,
//     "X-User-Id": 1, // 실제론 이거 없어도 Gateway가 헤더에서 userId 추출함
//   },
//   }

// );
// const res = await axios.get("/api/answers/my", {
//   params: { page },
//   headers: {
//     Authorization: `Bearer ${accessToken}`
//   },
// });

  return res.data.result;


}
