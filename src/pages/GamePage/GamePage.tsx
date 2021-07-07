import { Form } from "antd";
import PageContainer from "components/PageContainer/TypingTexts";
import Steps from "components/Steps";
import { StepFase1, StepFase2 } from "components/StepsItens";
import React from "react";
import "./GamePage.less";

interface Props {}
const GamePage: React.FC<Props> = () => {
  const [formGame] = Form.useForm();
  return (
    <PageContainer>
      <div className="game-container">
        <div className="titulo-game">VAMOS COMEÇAR</div>
        <div className="conteudo-game">
          <Steps
            form={formGame}
            onComplete={(values: any) => console.log(values)}
            childrens={[
              {
                children: <StepFase1 />,
                label: "FASE 1",
              },
              {
                children: <StepFase2 />,
                label: "FASE 2",
              },
            ]}
          ></Steps>
        </div>
      </div>
    </PageContainer>
  );
};

export default GamePage;
