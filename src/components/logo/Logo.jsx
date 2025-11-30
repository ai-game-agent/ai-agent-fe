import s from "./Logo.module.scss";
import LOGO from "@assets/images/main_title.svg";
import CHAR from "@assets/images/character_full.png";

const Logo = ({ char = "6rem", width = "31.3125rem" }) => {
  return (
    <div className={s.logoContainer}>
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
