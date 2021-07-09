import React, { memo } from "react";
import "./StepFase4.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase4: React.FC = () => {
  return (
    <>
      <h2 className="pergunta-text">
        Durante a conversação com o usuário ou familiar, tenho a postura de...
      </h2>
      <Form.Item name="cohorte" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>
              não fazer outras perguntas diferentes do protocolo
            </Radio>
            <Radio value={25}>fazer poucas perguntas diferentes</Radio>
            <Radio value={50}>
              fazer perguntas diferentes mais ainda baseadas num protocolo de
              cuidado
            </Radio>
            <Radio value={75}>fazer perguntas diferentes e espontâneas</Radio>
            <Radio value={100}>
              fazer perguntas diferentes, espontâneas e numa atitude de
              indagação dialogada
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase4);
