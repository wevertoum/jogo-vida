import React, { memo } from "react";
import "./StepFase6.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase6: React.FC = () => {
  return (
    <>
      <h2 className="pergunta-text">
        Na interação com o usuário ou familiar, ao perceber algumas pistas de
        comunicação não verbal, eu geralmente tenho a tendência de...
      </h2>
      <Form.Item
        name="pistas_de_comunicacao_nao_verbal"
        rules={defaultFormRules}
      >
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>
              ignorar ou não observar a expressão não verbal do outro
            </Radio>
            <Radio value={25}>
              perceber as diferentes nuances da expressão não verbal do outro
            </Radio>
            <Radio value={50}>
              interpretar a expressão não verbal do outro
            </Radio>
            <Radio value={75}>
              ter reações/postura/atitudes coerentes com a expressão não verbal
              do outro
            </Radio>
            <Radio value={100}>
              ser continente a expressão não verbal do outro
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase6);
