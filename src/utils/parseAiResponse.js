export const parseAiResponse = (rawText) => {
  if (!rawText || typeof rawText !== "string") {
    return { intro: "", games: [], outro: "" };
  }

  const content = rawText.trim();
  const games = [];

  // 인트로와 게임 분리
  const introGamesSplitRegex = /(\s*🎮[^:]+:\s*)/;
  const parts = content.split(introGamesSplitRegex);

  let intro = "";
  let gameBlocksRaw = "";

  if (parts.length > 1) {
    if (parts[0].trim() !== "") {
      intro = parts[0].trim();
    }

    gameBlocksRaw = parts.slice(2).join("").trim();
  } else {
    // 🎮 헤더가 없는 응답인 경우
    intro = content;
    gameBlocksRaw = "";
  }

  // 아웃트로 분리
  let outro = "";
  const gameBlocksAndOutro = gameBlocksRaw.split(/^(?=\n[^\d.\-\s]+)/m);

  if (gameBlocksAndOutro.length > 1) {
    gameBlocksRaw = gameBlocksAndOutro[0].trim();
    outro = gameBlocksAndOutro.slice(1).join("").trim();
  } else {
    gameBlocksRaw = gameBlocksAndOutro[0].trim();
  }

  // 게임 정보 파싱
  const gameBlockRegex = /(\d+)\.\s*(.*?)(?=\n\d+\.|\n*$)/gs;

  let gameMatch;
  while ((gameMatch = gameBlockRegex.exec(gameBlocksRaw)) !== null) {
    const blockText = gameMatch[2].trim();

    // 제목 추출
    const titleLine = blockText.split("\n")[0].trim();

    const game = {
      number: gameMatch[1],
      title: titleLine,
      price: "",
      players: "",
      genre: "",
      reason: "",
    };

    // 속성 추출: " - 키: 값" 패턴
    const attrRegex = /^\s*-\s*([^:]+):\s*(.*)$/gm;
    let attrMatch;
    let isReason = false;

    // 속성 파싱
    while ((attrMatch = attrRegex.exec(blockText)) !== null) {
      const key = attrMatch[1].trim();
      const value = attrMatch[2].trim();
      isReason = false;

      if (key === "가격") game.price = value;
      else if (key === "플레이어") game.players = value;
      else if (key === "장르") game.genre = value;
      else if (key === "추천 이유") {
        game.reason = value;
        isReason = true;
      }

      if (isReason) {
        const remainingText = blockText
          .substring(attrMatch.index + attrMatch[0].length)
          .trim();
        // 다음 속성이나 다음 게임 시작 번호가 나타날 때까지의 텍스트를 추출
        const reasonEndMatch = remainingText.match(
          /(\n\s*-\s*[^:]+:\s*|^\s*\d+\.\s*)/
        );
        let reasonText = remainingText;
        if (reasonEndMatch) {
          reasonText = remainingText.substring(0, reasonEndMatch.index).trim();
        }
        game.reason +=
          (game.reason ? " " : "") + reasonText.replace(/\n\s*/g, " ").trim();
      }
    }

    if (game.title.includes("- 가격:") || game.title.includes("- 장르:")) {
      game.title = titleLine.split("\n")[0].trim();
    }

    games.push(game);
  }

  return {
    intro: intro,
    games: games,
    outro: outro,
  };
};
