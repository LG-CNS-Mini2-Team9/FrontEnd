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
    content:"**각 항목별 점수**:\n- 정확성: 28/40점 - 핵심 개념은 맞으나 몇 가지 중요한 세부 사항이 누락되었습니다. TCP/IP가 프로토콜 '집합'이라는 점은 잘 언급했지만, 각 계층별 기능이나 작동 방식에 대한 설명이 부족합니다. \n- 완성도: 18/25점 - TCP/IP의 기본적인 정의는 제시했지만, 질문에서 요구하는 모든 요소를 완벽하게 다루지는 못했습니다. 예를 들어, TCP와 IP 각각의 역할, OSI 7계층 모델과의 관계 등을 설명해야 합니다.\n- 논리성: 16/20점 - 답변은 간결하고 핵심 내용을 담고 있지만, TCP/IP의 작동 원리를 더 자세히 설명했다면 논리적인 흐름이 더욱 강화되었을 것입니다. \n- 명확성: 13/15점 - 전반적으로 이해하기 쉬운 표현을 사용했지만, 더 구체적인 예시를 들어 설명했다면 명확성이 더욱 높아졌을 것입니다. \n\n**잘한 점**:\n1. TCP/IP가 인터넷 통신의 핵심 프로토콜 집합이라는 점을 정확히 언급했습니다.\n2. 컴퓨터들이 네트워크를 통해 데이터를 주고받는다는 기본적인 기능을 잘 설명했습니다.\n3. 간결하고 명확하게 답변을 작성하려고 노력한 점이 돋보입니다.\n\n**개선할 점**:\n1. TCP와 IP 각각의 역할과 작동 방식을 더 자세히 설명해야 합니다. 예를 들어, TCP는 데이터 전송의 신뢰성을 보장하고, IP는 주소 지정 및 경로 설정을 담당한다는 점을 언급할 수 있습니다.\n2. OSI 7계층 모델과의 관계를 설명하여 TCP/IP가 네트워크 통신에서 어떤 위치를 차지하는지 명확히 해야 합니다. 각 계층별 프로토콜 예시를 들어 설명하면 이해도를 높일 수 있습니다.\n3. 실제 데이터 전송 과정을 예시로 들어 설명하면 TCP/IP의 작동 원리를 더욱 쉽게 이해할 수 있습니다.\n\n**추가 학습 권장사항**:\n- TCP/IP의 각 계층별 기능과 프로토콜에 대해 자세히 학습하세요. (예: Application Layer, Transport Layer, Network Layer, Data Link Layer, Physical Layer)\n- OSI 7계층 모델과 TCP/IP 모델의 관계를 비교 분석해보세요.\n- Wireshark와 같은 네트워크 분석 도구를 사용하여 실제 네트워크 트래픽을 분석해보세요.",
    score:75
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
