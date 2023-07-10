type LyricType = {
  time: number;
  text: string;
};

function parseLyric(lyric: string): LyricType[] {
  const lyrics: LyricType[] = [];
  lyrics.push({ time: 12312312, text: "adas123" });
  return lyrics;
}

const lyricInfos = parseLyric("fs");
for (const item of lyricInfos) {
  console.log(item.time, item.text);
}

export {};
