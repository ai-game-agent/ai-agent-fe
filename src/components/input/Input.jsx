import s from "./Input.module.scss";
import SEARCH from "@assets/icons/search_icon.svg";

const Input = ({ width = "55.3125rem", height = "4.9375rem" }) => {
  return (
    <div className={s.InputContainer} style={{ width, height }}>
      <span className={s.InputSpan}>
        <input placeholder="ex. 커플끼리 할 2만원 이하 게임 추천해줘" />
        <img src={SEARCH} alt="검색" className={s.searchButton} />
      </span>
    </div>
  );
};

export default Input;
