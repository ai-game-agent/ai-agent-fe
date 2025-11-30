import s from "./Logo.module.scss";
import LOGO from "@assets/images/main_title.svg";
import CHAR from "@assets/images/character_full.png";
import useNavigation from "../../hooks/useNavagation";

const Logo = ({ char = "4.8980vw", width = "25.5612vw" }) => {
  const { goTo } = useNavigation();

  return (
    <div className={s.logoContainer} onClick={() => goTo("/")}>
      <img src={CHAR} alt="캐릭터" style={{ width: char }} />
      <img
        src={LOGO}
        alt="로고"
        className={s.logoContainer}
        style={{ width }}
      />
    </div>
  );
};

export default Logo;
