export const parseAiResponse = (rawText) => {
  if (!rawText) return { intro: "", games: [] };

  const lines = rawText.split("\n");
  const introLines = [];
  const games = [];

  const gameRegex = /- \*\*(.*?)\*\*: (.*?)(?:\[(\d+)\])?$/;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return; // 빈 줄 무시

    if (trimmed.startsWith("-")) {
      // 게임 리스트
      const match = trimmed.match(gameRegex);
      if (match) {
        games.push({
          title: match[1],
          desc: match[2],
          citation: match[3] || null,
        });
      } else {
        // 정규식 안 맞으면 그냥 통째로 넣기
        games.push({ title: "Unknown", desc: trimmed.replace("- ", "") });
      }
    } else {
      // "-"로 시작 안 하면 멘트
      introLines.push(trimmed);
    }
  });

  return {
    intro: introLines.join("\n"),
    games: games,
  };
};
