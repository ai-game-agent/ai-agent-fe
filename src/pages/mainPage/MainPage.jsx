import s from "./MainPage.module.scss";
import Logo from "../../components/logo/Logo";
import Input from "../../components/input/Input";

const MainPage = () => {
  return (
    <div className={s.MainPageContainer}>
      <Logo />
      <p className={s.descriptionText}>
        11만 개의 Steam 게임 중, 당신의 취향을 저격할 게임을 찾아드립니다
      </p>
      <Input />
    </div>
  );
};

export default MainPage;
