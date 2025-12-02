import s from "./ChatPage.module.scss";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import ChatBox from "./components/chatBox/ChatBox";
import useNavigation from "../../hooks/useNavagation";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { fetchRecommendation } from "../../apis/recommend";

const ChatPage = () => {
  const { goTo } = useNavigation();
  const location = useLocation();

  // 전달받은 데이터 추출
  const { userQuery, aiResponse } = location.state || {};
  const aiText = aiResponse?.response || "추천 결과를 불러오지 못했습니다.";

  // 채팅 기록 상태
  const [messages, setMessages] = useState(() => {
    if (userQuery && aiResponse) {
      return [
        { type: "user", text: userQuery },
        { type: "ai", text: aiText },
      ];
    }
    return [];
  });

  const [inputQuery, setInputQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    const query = inputQuery.trim();
    if (isLoading || !query) return;

    // 사용자 메시지를 즉시 채팅 목록에 추가
    const newUserMessage = { type: "user", text: query };

    const loadingMessage = { type: "ai", text: "LOADING_SIGNAL" }; // 임의의 시그널

    setMessages((prev) => [...prev, newUserMessage, loadingMessage]);
    setInputQuery("");
    setIsLoading(true);

    try {
      const sessionId = "my-session-2";
      const newAiResponse = await fetchRecommendation(query, sessionId);
      const newAiText = newAiResponse.response || "답변을 불러오지 못했습니다.";

      setMessages((prev) => {
        // 배열의 마지막 메시지(LOADING_SIGNAL)를 찾아서 실제 답변으로 대체
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;

        if (newMessages[lastIndex].text === "LOADING_SIGNAL") {
          newMessages[lastIndex] = { type: "ai", text: newAiText };
        } else {
          newMessages.push({ type: "ai", text: newAiText });
        }
        return newMessages;
      });
    } catch (error) {
      console.error("추천 API 호출 중 오류 발생:", error);
      setMessages((prev) => {
        const newMessages = [...prev];
        const lastIndex = newMessages.length - 1;
        newMessages[lastIndex] = {
          type: "ai",
          text: `[오류] 메시지를 처리하지 못했습니다: ${error.message}`,
        };
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={s.chatPageContainer}>
      <Logo char="2.3673vw" width="13.8776vw" />
      <div className={s.chatFrame}>
        <section className={s.topBar}>
          <div className={s.circle1} onClick={() => goTo("/")} />
          <div className={s.circle2} />
          <div className={s.circle3} />
        </section>
        <section className={s.content}>
          <div className={s.chatSection}>
            <ChatBox messages={messages} />
          </div>
          <Input
            height="3.2653vw"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onClick={handleSendMessage}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            disabled={isLoading}
          />
        </section>
      </div>
    </div>
  );
};

export default ChatPage;
