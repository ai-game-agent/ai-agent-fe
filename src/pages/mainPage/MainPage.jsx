import s from "./MainPage.module.scss";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";
import useTypewriter from "../../utils/useTypewriter";
import useNavigation from "../../hooks/useNavagation";

const MainPage = () => {
  const { goTo } = useNavigation();

  const fullText =
    "11만 개의 Steam 게임 중, 당신의 취향을 저격할 게임을 찾아드립니다";
  const typingText = useTypewriter(fullText, 100);

  return (
    <div className={s.MainPageContainer}>
      <Logo />
      <p className={s.descriptionText}>{typingText}</p>
      <Input onClick={() => goTo(`/chat`)} />
    </div>
  );
};

export default MainPage;
