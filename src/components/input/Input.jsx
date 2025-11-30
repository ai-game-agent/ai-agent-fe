import s from "./Input.module.scss";
import SEARCH from "@assets/icons/search_icon.svg";

const Input = ({ width = "55.3125rem", height = "4.9375rem", onClick }) => {
  return (
    <div className={s.InputContainer} style={{ width, height }}>
      <input placeholder="ex. 커플끼리 할 2만원 이하 게임 추천해줘" />
      <img
        src={SEARCH}
        alt="검색"
        className={s.searchButton}
        style={{ width: "1.6rem" }}
        onClick={onClick}
      />
    </div>
  );
};

export default Input;
