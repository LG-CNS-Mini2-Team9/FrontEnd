import axios from "axios";

/**
 * @param {number} page
 * @param {string} questionId
 * @returns {Promise<{ content: any[], totalPages: number }>}
 */
export const fetchAllAnswers = async (page = 1, questionId) => {
  const accessToken = localStorage.getItem("accessToken");
  // const res = await axios.get("/api/answer", {
  //   params: {
  //     page,
  //     size: 10,
  //     csquestion_id: questionId,
  //     sort: "csanswer_created_at,asc",
  //   },
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // return {
  //   content: res.data.result.content,
  //   totalPages: res.data.result.totalPages,
  // };

  const data=[
     {id:1,
      content:"gegee",
      category:"fefe",
      score:90,
      createdAt:"2025-10-11",
      author:"lgcns"
    }
  ]
  return data;
};

export const fetchMyAnswers = async (page = 1, questionId) => {
  const accessToken = localStorage.getItem("accessToken");
  // const res = await axios.get("/api/answer", {
  //   params: {
  //     page,
  //     size: 10,
  //     csquestion_id: questionId,
  //     sort: "csanswer_created_at,asc",
  //   },
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // return {
  //   content: res.data.result.content,
  //   totalPages: res.data.result.totalPages,
  // };
    const data=[
    {id:1,
      content:"gegee",
      category:"fefe",
      score:90,
      createdAt:"2025-10-11",
      author:"lgcns"
    }
  ]
  return data;
};


export const fetchMyAllAnswers = async (page = 1, category="") =>{
   const accessToken = localStorage.getItem("accessToken");
  // const res = await axios.get("/api/answer", {
  //   params: {
  //     page,
  //     category:category||undefined
  //   },
  //   ...(accessToken && {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   }),
  // });

  // return res.data.result;
  const data=[
    {id:1,
      content:"gegee",
      category:"fefe",
      score:90,
      createdAt:"2025-10-11",
      author:"lgcns"
    }
  ]
  return data;
}
