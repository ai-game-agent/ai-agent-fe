export const parseAiResponse = (rawText) => {
  if (!rawText) return { intro: "", games: [], outro: "" };

  // 줄바꿈(\n) 기준으로 쪼개고 공백 제거
  const lines = rawText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  const introLines = [];
  const outroLines = [];
  const games = [];

  let isGameSectionStarted = false;

  // 숫자 + 점 패턴
  const numberRegex = /^(\d+)\.\s*(.*)/;

  lines.forEach((line) => {
    const match = line.match(numberRegex);

    if (match) {
      // 숫자로 시작하는 줄 -> 게임 정보
      isGameSectionStarted = true;

      const content = match[2];

      // 제목과 설명 분리
      const separatorIndex = content.indexOf(" - ");

      let title = "";
      let desc = "";

      if (separatorIndex !== -1) {
        title = content.substring(0, separatorIndex).trim();
        desc = content.substring(separatorIndex + 3).trim();
      } else {
        title = content;
        desc = "";
      }

      games.push({ title, desc });
    } else {
      // 숫자가 아닌 줄
      if (!isGameSectionStarted) {
        introLines.push(line);
      } else {
        outroLines.push(line);
      }
    }
  });

  return {
    intro: introLines.join("\n"),
    games: games,
    outro: outroLines.join("\n"),
  };
};
