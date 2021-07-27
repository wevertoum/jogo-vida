import React, { memo } from "react";
import "./StepFase1.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase1: React.FC = () => {
  return (
    <>
      <h2 className="pergunta-text">
        Quando o usuário e ou familiar se aproxima para conversar comigo,
        geralmente...
      </h2>
      <Form.Item name="acolhimento" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>
              escuto prestando atenção na pessoa (jeito de vestir, postura,
              higiene)
            </Radio>
            <Radio value={25}>
              escuto prestando atenção nos conteúdos do que o outro diz
            </Radio>
            <Radio value={50}>escuto atento as queixas/demandas do outro</Radio>
            <Radio value={75}>escuto fazendo perguntas para entender</Radio>
            <Radio value={100}>
              escuto com curiosidade (interesse em entender verdadeiramente)
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase1);
