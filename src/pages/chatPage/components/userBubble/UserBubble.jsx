import s from "./UserBubble.module.scss";

const UserBubble = ({ text = "" }) => {
  return (
    <div className={s.userBubbleContainer}>
      <span className={s.text}>{text}</span>
    </div>
  );
};

export default UserBubble;
