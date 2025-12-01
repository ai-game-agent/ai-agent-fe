import { useMemo } from "react";
import s from "./AiBubble.module.scss";
import { parseAiResponse } from "../../../../utils/parseAiResponse";
import AI from "@assets/images/ai_profile.png";

const AiBubble = ({ text }) => {
  const { intro, games, outro } = useMemo(() => parseAiResponse(text), [text]);

  const mainMessageContent =
    intro.trim() !== ""
      ? intro
      : games.length > 0
      ? `사용자님의 취향을 저격할 게임은 다음과 같아요!`
      : "응답을 처리하는 데 문제가 발생했습니다.";

  return (
    <div className={s.aiBubbleContainer}>
      <div className={s.introSection}>
        <img src={AI} alt="ai" style={{ width: "1.6816vw" }} />
        <div className={s.introBubble}>{mainMessageContent}</div>
      </div>

      <div className={s.cardList}>
        {games.map((game, index) => (
          <div key={index} className={s.gameCard}>
            <div className={s.iconPlaceholder}>
              <span className={s.icon}>🎮</span>
            </div>

            <div className={s.textInfo}>
              {/* 게임 제목 */}
              <h4 className={s.gameTitle}>{game.title}</h4>

              {/* 상세 속성 목록 (가격, 플레이어, 장르) */}
              <div className={s.metaInfo}>
                {game.price && <span>💰 {game.price} |</span>}
                {game.players && <span>👥 {game.players} |</span>}
                {game.genre && <span>🏷️ {game.genre} </span>}
              </div>

              {/* 추천 이유 */}
              <p className={s.gameReason}>{game.reason}</p>
            </div>
          </div>
        ))}
      </div>

      {outro && (
        <div className={s.outroBubble} style={{ marginLeft: "1.6327vw" }}>
          {outro}
        </div>
      )}
    </div>
  );
};

export default AiBubble;
