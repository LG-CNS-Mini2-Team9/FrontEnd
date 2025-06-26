export const mockRecommendedQuestion = {
  id: 101,
  category: "네트워크",
  content: "TCP/IP의 개념을 설명하세요.",
  // Window 컴포넌트에서 사용하는 isSubmitted 속성을 추가합니다.
  isSubmitted: false,
};

export const mockQuestions = [
  {
    id: 1,
    category: "자료구조",
    content: "배열과 연결 리스트의 차이점은 무엇인가요?",
    // CSQuestionTable에서 사용하는 createdAt, isSubmitted 속성을 추가합니다.
    createdAt: "2025-06-25T12:34:56",
    isSubmitted: true,
  },
  {
    id: 2,
    category: "운영체제",
    content: "프로세스와 스레드의 차이점에 대해 설명해주세요.",
    createdAt: "2025-06-25T12:34:56",
    isSubmitted: false,
  },
  {
    id: 3,
    category: "네트워크",
    content: "HTTP와 HTTPS의 차이점은 무엇인가요?",
    createdAt: "2025-06-25T12:34:56",
    isSubmitted: true,
  },
    {
    id: 4,
    category: "알고리즘",
    content: "퀵 정렬의 시간 복잡도는 어떻게 되나요?",
    createdAt: "2025-06-25T12:34:56",
    isSubmitted: true,
  },
      {
    id: 5,
    category: "네트워크",
    content: "TCP/IP의 개념을 설명하세요.",
    createdAt: "2025-06-25T12:34:56",
    isSubmitted: false,
  },
];