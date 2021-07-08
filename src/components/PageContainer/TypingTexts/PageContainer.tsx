import React from "react";
import "./PageContainer.less";

interface Props {
  title?: string;
}
const PageContainer: React.FC<Props> = ({
  title = "RODA DA VIDA - JOGO DO ENGAJAMENTO",
  children,
}) => {
  return (
    <div className="main-content-game-background">
      <div className="titulo-page-container">{title}</div>
      <div className="children-content"></div>
      {children}
    </div>
  );
};

export default PageContainer;
