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
import useLocalStorage from "hooks/useLocalStorage";
import React from "react";
import { useHistory } from "react-router-dom";
import "./GamePage.less";

interface Props {}
const GamePage: React.FC<Props> = () => {
  const [formGame] = Form.useForm();
  const [, setPoints] = useLocalStorage<Models.Points>(
    "pontuacao",
    {} as Models.Points
  );
  const history = useHistory();
  return (
    <PageContainer>
      <div className="game-container">
        <div className="conteudo-game">
          <Steps
            form={formGame}
            onComplete={(values: Models.Points) => {
              setPoints(values);
              history.push("/resultado");
            }}
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
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default GamePage;
