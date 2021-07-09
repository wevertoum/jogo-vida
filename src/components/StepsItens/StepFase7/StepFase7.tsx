import React, { memo } from "react";
import "./StepFase7.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase7: React.FC = () => {
  return (
    <>
      <h2 className="pergunta-text">
        Quando estou com o usuário ou familiar, durante nossas conversas
        geralmente...
      </h2>
      <Form.Item name="dialogos_colaborativos" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>
              faço explicações técnicas, mas não estabeleço outras conversasag
            </Radio>
            <Radio value={25}>
              faço conversas para orientar e explicar algo para as outras
              pessoas
            </Radio>
            <Radio value={50}>
              estabeleço diálogo para explicar algo para o outro
            </Radio>
            <Radio value={75}>
              estabeleço diálogo para colaborar com a expressão do outro
            </Radio>
            <Radio value={100}>
              crio perguntas ou conversas para entender e colaborar com uma
              maior expressão e entendimento do outro
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase7);
