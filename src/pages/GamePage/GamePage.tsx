import { Form } from "antd";
import PageContainer from "components/PageContainer/TypingTexts";
import Steps from "components/Steps";
import {
  StepFase1,
  StepFase2,
  StepFase3,
  StepFase4,
  StepFase5,
  StepFase6,
  StepFase7,
} from "components/StepsItens";
import PointsContext from "contexts/PointsContext";
import React from "react";
import { useContext } from "react";
import "./GamePage.less";

interface Props {}
const GamePage: React.FC<Props> = () => {
  const [formGame] = Form.useForm();
  const { setPoints } = useContext(PointsContext);
  return (
    <PageContainer>
      <div className="game-container">
        <div className="titulo-game">VAMOS COMEÇAR</div>
        <div className="conteudo-game">
          <Steps
            form={formGame}
            onComplete={(values: Models.Points) => setPoints(values)}
            childrens={[
              {
                children: <StepFase1 />,
                label: "FASE 1",
              },
              {
                children: <StepFase2 />,
                label: "FASE 2",
              },
              {
                children: <StepFase3 />,
                label: "FASE 3",
              },
              {
                children: <StepFase4 />,
                label: "FASE 4",
              },
              {
                children: <StepFase5 />,
                label: "FASE 5",
              },
              {
                children: <StepFase6 />,
                label: "FASE 6",
              },
              {
                children: <StepFase7 />,
                label: "FASE 7",
              },
            ]}
          ></Steps>
        </div>
      </div>
    </PageContainer>
  );
};

export default GamePage;
