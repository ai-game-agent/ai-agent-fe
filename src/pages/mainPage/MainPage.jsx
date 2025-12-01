import s from "./MainPage.module.scss";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import useTypewriter from "../../utils/useTypewriter";
import useNavigation from "../../hooks/useNavagation";
import { useState } from "react";
import { fetchRecommendation } from "../../apis/recommend";

const MainPage = () => {
  const { goTo } = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fullText =
    "11만 개의 Steam 게임 중, 당신의 취향을 저격할 게임을 찾아드립니다";
  const typingText = useTypewriter(fullText, 100);

  const handleRecommend = async () => {
    const query = inputValue.trim();
    const sessionId = "my-session-1"; // 요청하신 고정 세션 ID

    if (isLoading || !query) {
      // 로딩 중이거나 입력 값이 비어있으면 동작하지 않음
      return;
    }

    try {
      setIsLoading(true);
      console.log(`API 호출 시작: query='${query}', session_id='${sessionId}'`);

      // API 호출
      const recommendationData = await fetchRecommendation(query, sessionId);
      console.log("API 호출 성공! ", recommendationData);

      goTo(`/chat`, {
        state: {
          userQuery: query, // 질문
          aiResponse: recommendationData, // ai 답변
        },
      });
    } catch (error) {
      console.error("추천 API 호출 중 오류 발생:", error);
      alert(`추천을 받는 중 오류가 발생했습니다: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={s.MainPageContainer}>
      <Logo />
      <p className={s.descriptionText}>{typingText}</p>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={handleRecommend}
        onKeyDown={(e) => {
          // 엔터 키
          if (e.key === "Enter") {
            handleRecommend();
          }
        }}
        disabled={isLoading}
      />
    </div>
  );
};

export default MainPage;
