import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./TypingTexts.less";

interface Props {
  word: string;
}
const TypingTexts: React.FC<Props> = ({ word }) => {
  return (
    <div className="main-about">
      <ReactTypingEffect eraseDelay={200000} speed={50} text={word} />
    </div>
  );
};

export default TypingTexts;
