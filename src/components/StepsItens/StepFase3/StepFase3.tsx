import React, { memo } from "react";
import "./StepFase3.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase3: React.FC = () => {
  return (
    <>
      <h2 className="pergunta-text">
        Quando o usuário ou o familiar esta se expressando sobre suas
        queixas/demandas/dificuldades, eu faço...
      </h2>
      <Form.Item name="escuta_ativa" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>perguntas para escutar as demandas do outro</Radio>
            <Radio value={25}>
              perguntas para escutar e orienta para buscar atendimentos
            </Radio>
            <Radio value={50}>
              perguntas para o outro trazer mais explicações sobre sua demanda
              de saúde
            </Radio>
            <Radio value={75}>
              escuta as demandas e direcionada a um serviço de saúde mais
              assertivo
            </Radio>
            <Radio value={100}>
              perguntas reflexivas para ampliar o entendimento sobre a situação
              para além do fato/problema
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase3);
