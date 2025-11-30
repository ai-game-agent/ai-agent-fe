import s from "./ChatBox.module.scss";
import UserBubble from "../userBubble/UserBubble";
import AiBubble from "../aiBubble/AiBubble";

// AI 답변 임시
const rawText = `
\n\n위에서 검색된 결과를 바탕으로 재미있는 RPG 게임 5개를 추천합니다: 
\n\n1. Elegy of Fate: Prologue - 독특한 RPG 여정을 경험할 수 있는 인디 게임입니다. 신비로운 세계를 탐험하고 전설적인 영웅을 깨워 운명을 결정할 수 있습니다. 
\n\n2. Adventure of Rikka - The Cursed Kingdom - 2D 액션 RPG로, 퍼즐 해결과 탐험, 숨겨진 보물 찾기 등의 요소를 포함하고 있습니다. 
\n\n3. Celestial Command - 우주 시뮬레이션 요소가 가미된 RPG 게임으로, 소행성 채굴, 우주선 제작, 거래 등 다양한 활동을 할 수 있습니다.
\n\n4. Dungeon Lurk II- Leona - 퍼즐 요소가 강조된 액션 어드벤처 RPG입니다. 환경을 자세히 살펴보며 숨겨진 단서를 찾아내는 게임플레이가 특징입니다. 
\n\n5. Hook Adventure - 뛰어난 세계관과 스타일리시한 그래픽이 인상적인 어드벤처 RPG입니다. 위험한 장소를 탐험하고 과거의 비밀을 밝혀나가게 됩니다. 
\n\n이 게임들은 모두 독특한 설정과 재미있는 요소를 가지고 있어, RPG를 좋아하시는 분들에게 추천드립니다. 보다 구체적인 선호도에 따라 다른 추천이 필요하신 경우 알려주시면 도와드리겠습니다. \n
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
