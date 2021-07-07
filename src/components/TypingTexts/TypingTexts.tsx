import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./TypingTexts.less";

interface Props {
  words: string[];
}
const TypingTexts: React.FC<Props> = ({ words }) => {
  return (
    <div className="main-about">
      <ReactTypingEffect
        eraseSpeed={100}
        eraseDelay={500}
        speed={300}
        typingDelay={500}
        text={[words]}
      />
    </div>
  );
};

export default TypingTexts;
