import React, { memo } from "react";
import "./StepFase5.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase5: React.FC = () => {
  return (
    <>
      <h2>
        Durante a conversação com o usuário ou familiar, tenho a postura de...
      </h2>
      <Form.Item name="aproximacao_e_empatia" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>
              distanciamento total (físico, manter distância corporal e esquivar
              o olhar; psiquico, pensar em idéias/crenças que são melhores;
              emocional, não me impactar)
            </Radio>
            <Radio value={25}>
              aproximação gradual através do olhar, postura corporal e atitude
              de atenção focada direcionadas ao outro
            </Radio>
            <Radio value={50}>
              atenção focada no outro expressando interesse nos seus relatos de
              sofrimentos
            </Radio>
            <Radio value={75}>
              atenção focada e interessada, demonstrando querer saber mais
            </Radio>
            <Radio value={100}>
              compreender e valorizar as dinâmicas de sofrimento do outro e
              demonstrar com atitudes/postura coerentes
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase5);
