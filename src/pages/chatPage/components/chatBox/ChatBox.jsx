import s from "./ChatBox.module.scss";
import UserBubble from "../userBubble/UserBubble";
import AiBubble from "../aiBubble/AiBubble";
import Spinner from "../../../../components/spinner/Spinner";
import { useRef, useEffect } from "react";

const ChatBox = ({ messages = [] }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={s.chatBoxContainer}>
      {messages.map((msg, index) =>
        msg.type === "user" ? (
          // 사용자 메시지
          <UserBubble key={index} text={msg.text} />
        ) : // AI 메시지
        msg.text === "LOADING_SIGNAL" ? (
          <div key={index} className={s.spinnerWrapperInChat}>
            <Spinner />
          </div>
        ) : (
          <AiBubble key={index} text={msg.text} />
        )
      )}

      <div ref={scrollRef} style={{ height: 0 }} />
    </div>
  );
};

export default ChatBox;
