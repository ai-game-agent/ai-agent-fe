import s from "./ChatPage.module.scss";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import ChatBox from "./components/chatBox/ChatBox";
import useNavigation from "../../hooks/useNavagation";

const ChatPage = () => {
  const { goTo } = useNavigation();

  return (
    <div className={s.chatPageContainer}>
      <Logo char="2.9rem" width="17rem" />
      <div className={s.chatFrame}>
        <section className={s.topBar}>
          <div className={s.circle1} onClick={() => goTo("/")} />
          <div className={s.circle2} />
          <div className={s.circle3} />
        </section>
        <section className={s.content}>
          <div className={s.chatSection}>
            <ChatBox />
          </div>
          <Input height="4rem" />
        </section>
      </div>
    </div>
  );
};

export default ChatPage;
