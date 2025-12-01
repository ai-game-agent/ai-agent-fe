import axios from "axios";

const API_BASE_URL = "http://localhost:8000";
const ENDPOINT = "/recommend";

export const fetchRecommendation = async (query, sessionId) => {
  const payload = {
    query: query,
    session_id: sessionId,
  };

  try {
    const response = await axios.post(`${API_BASE_URL}${ENDPOINT}`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("API 호출 오류:", error);

    if (error.response) {
      throw new Error(
        `API 오류: ${error.response.status} - ${
          error.response.data.detail || error.response.statusText
        }`
      );
    } else if (error.request) {
      throw new Error(
        "서버에 연결할 수 없습니다. 백엔드 서버가 실행 중인지 확인하세요."
      );
    } else {
      throw new Error(`요청 설정 오류: ${error.message}`);
    }
  }
};
