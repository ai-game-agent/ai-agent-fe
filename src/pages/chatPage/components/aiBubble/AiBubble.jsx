import { useMemo } from "react";
import s from "./AiBubble.module.scss";
import { parseAiResponse } from "../../../../utils/parseAiResponse";
import AI from "@assets/images/ai_profile.png";

const AiBubble = ({ text }) => {
  const { intro, games, outro } = useMemo(() => parseAiResponse(text), [text]);

  return (
    <div className={s.aiBubbleContainer}>
      {/* 상단 멘트 */}
      {intro && (
        <div className={s.introSection}>
          <img src={AI} alt="ai" style={{ width: "2.06rem" }} />{" "}
          <div className={s.introBubble}>{intro}</div>
        </div>
      )}

      {/* 게임 카드 리스트 */}
      <div className={s.cardList}>
        {games.map((game, index) => (
          <div key={index} className={s.gameCard}>
            <div className={s.iconPlaceholder}>🎮</div>

            <div className={s.textInfo}>
              <h4 className={s.gameTitle}>{game.title}</h4>
              <p className={s.gameDesc}>{game.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {outro && (
        <div className={s.introBubble} style={{ marginLeft: "2rem" }}>
          {outro}
        </div>
      )}
    </div>
  );
};

export default AiBubble;
