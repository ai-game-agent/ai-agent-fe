import s from "./ChatBox.module.scss";
import UserBubble from "../userBubble/UserBubble";
import AiBubble from "../aiBubble/AiBubble";

// AI 답변 임시
const rawText = `
다음은 둘이서 함께 즐길 수 있는 스팀 게임 목록입니다:

- **Arsene Bomber: Cosmic**: 이 게임은 멀티플레이어 및 공유/분할 화면 협동 모드를 지원하므로 두 사람이 함께 플레이할 수 있습니다 [1]
- **Trash Pandamonium**: 이 게임은 싱글 플레이어 및 멀티 플레이어 모드를 지원하므로 두 사람이 함께 플레이 할 수 있습니다 [2]
- **Mutant Storm: Reloaded**: 이 게임은 멀티플레이어 및 온라인 PvP 모드를 지원하므로 두 사람이 함께 플레이할 수 있습니다
`;

const ChatBox = () => {
  return (
    <div className={s.chatBoxContainer}>
      <UserBubble text={`커플끼리 할 2만원 이하 게임 추천해줘`} />
      <AiBubble text={rawText} />
    </div>
  );
};

export default ChatBox;
