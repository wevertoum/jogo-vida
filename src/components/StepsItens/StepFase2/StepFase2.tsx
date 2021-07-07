import React, { memo } from "react";
import "./StepFase2.less";
import { Form, Radio, Space } from "antd";
import defaultFormRules from "utils/defaultFormRules";

const StepFase2: React.FC = () => {
  return (
    <>
      <Form.Item name="resposta_fase2" rules={defaultFormRules}>
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
            <Radio value={4}>Option D</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default memo(StepFase2);
