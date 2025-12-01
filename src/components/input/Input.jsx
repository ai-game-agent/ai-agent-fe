import s from "./Input.module.scss";
import SEARCH from "@assets/icons/search_icon.svg";

const Input = ({
  width = "45.1531vw",
  height = "4.0306vw",
  onClick,
  value,
  onChange,
  onKeyDown,
  disabled,
}) => {
  return (
    <div className={s.InputContainer} style={{ width, height }}>
      <input
        placeholder="ex. 친구랑 할 수 있는 2만원 이하 협동 공포 게임 추천해줘"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <img
        src={SEARCH}
        alt="검색"
        className={s.searchButton}
        style={{ width: "1.3061vw" }}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
