import React from "react";
import "./PixelRain.scss";

const PixelRain = () => {
  // SCSS의 $drop-count 변수와 숫자를 얼추 맞춰주세요 (50개)
  // 개수를 늘리고 싶으면 여기 숫자와 SCSS $drop-count를 같이 늘리면 됩니다.
  const DROP_COUNT = 30;

  // 빈 배열을 만들어서 map으로 div 생성
  const drops = Array.from({ length: DROP_COUNT }, (_, index) => index);

  return (
    <div className="rain-container">
      {drops.map((i) => (
        <div key={i} className="rain-drop" />
      ))}
    </div>
  );
};

export default PixelRain;
