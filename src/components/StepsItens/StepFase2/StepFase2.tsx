import React, { memo } from "react";
import "./StepFase2.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase2: React.FC = () => {
  return (
    <>
      <h2>
        Durante meu contato com o usuário ou familiar, geralmente percebo que
        tenho a...
      </h2>
      <Form.Item name="vinculo" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={0}>
              atitude de falar constantemente enquanto o outro/usuário só escuta
            </Radio>
            <Radio value={25}>
              atitude de orientar e fazer perguntas se a pessoa compreendeu
            </Radio>
            <Radio value={50}>
              atitude de acompanhar o outro nas fases do atendimento
            </Radio>
            <Radio value={75}>
              atitude de acompanhar o desfecho do atendimento
            </Radio>
            <Radio value={100}>
              atitude de compreender o paciente em suas ações e dar feedbacks
              sobre suas próprias possibilidades de cuidado
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase2);
