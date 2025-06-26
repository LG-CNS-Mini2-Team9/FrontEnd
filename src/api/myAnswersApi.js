import axios from "axios";

/**
 * @param {number} page
 * @param {string} questionId
 * @returns {Promise<{ content: any[], totalPages: number }>}
 */
export const fetchAllAnswers = async (page = 1, questionId) => {
  const accessToken = localStorage.getItem("accessToken");
  // const res = await axios.get(`/api/answers/${questionId}`, {
  //   params: {
  //     page,
  //   },
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // return {
  //   content: res.data.result.content,
  //   totalPages: res.data.result.totalPages,
  // };

  const answers = [
    {
      id: 3,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-24T12:24:38",
      score: 88,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user1",
    },

    {
      id: 2,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-23T12:24:38",
      score: 79,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user2",
    },
    {
      id: 1,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-23T12:24:38",
      score: 75,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user1",
    },
  ];

  return answers;
};

export const fetchMyAnswers = async (page = 1, questionId) => {
  const accessToken = localStorage.getItem("accessToken");
  // const res = await axios.get("/api/answers/answers/my", {
  //   params: {
  //     page,
  //     questionId: questionId
  //   },
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // return {
  //   content: res.data.result.content,
  //   totalPages: res.data.result.totalPages,
  // };

  const answers = [
    {
      id: 2,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-24T12:24:38",
      score: 88,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user1",
    },

    {
      id: 1,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-23T12:24:38",
      score: 75,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user1",
    },
  ];

  return answers;
};

export const fetchMyAllAnswers = async (page = 1) => {
  const accessToken = localStorage.getItem("accessToken");
  //    const res = await axios.get("/api/api/answers/test", {
  //   params: { page },
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //     // "X-Auth-UserId": 1
  //   }
  // });

  // return res.data.result;

  const answers = [
    {
      id: 5,
      content: "프로세스와 스레드의 차이점을 설명하세요",
      createdAt: "2025-06-25T12:24:38",
      score: 85,
      csQuestionId: 4,
      category: "운영체제",
      userId: 1,
      author: "user1",
    },
    {
      id: 4,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-24T12:24:38",
      score: 88,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user1",
    },

    {
      id: 3,
      content: "이진탐색을 설명하세요",
      createdAt: "2025-06-24T12:24:38",
      score: 88,
      csQuestionId: 3,
      category: "알고리즘",
      userId: 1,
      author: "user1",
    },
    {
      id: 2,
      content: "TCP/IP의 개념을 설명하세요",
      createdAt: "2025-06-23T12:24:38",
      score: 75,
      csQuestionId: 2,
      category: "네트워크",
      userId: 1,
      author: "user1",
    },
    {
      id: 1,
      content: "Context Switch에 대해 설명하세요",
      createdAt: "2025-06-22T12:24:38",
      score: 82,
      csQuestionId: 1,
      category: "운영체제",
      userId: 1,
      author: "user1",
    },
  ];

  return answers;
};
