import s from "./ChatPage.module.scss";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import ChatBox from "./components/chatBox/ChatBox";
import useNavigation from "../../hooks/useNavagation";
import { useLocation } from "react-router-dom";

const ChatPage = () => {
  const { goTo } = useNavigation();
  const location = useLocation();

  // 전달받은 데이터 추출
  const { userQuery, aiResponse } = location.state || {};
  const aiText = aiResponse?.response || "추천 결과를 불러오지 못했습니다.";

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
            <ChatBox
              initialUserQuery={userQuery} // 사용자의 첫 질문
              initialAiResponse={aiText} // AI의 첫 답변
            />
          </div>
          <Input height="3.2653vw" />
        </section>
      </div>
    </div>
  );
};

export default ChatPage;
