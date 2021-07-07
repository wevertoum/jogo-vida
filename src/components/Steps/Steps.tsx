import React, { useState, useMemo, memo } from "react";
import "./Steps.less";
import { Button, Progress } from "antd";
import { FormInstance } from "antd/lib/form";
import Form from "antd/lib/form/Form";
import { merge } from "lodash";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

type ChildrenProp = {
  children: React.ReactNode;
  label: string;
};

interface Props {
  childrens: ChildrenProp[];
  form: FormInstance;
  initialValues?: Dict<any>;
  onComplete: (values: any) => void;
}

const Steps: React.FC<Props> = ({
  childrens,
  form,
  onComplete,
  initialValues = {},
}) => {
  const [index, setIndex] = useState(1);
  const [valuesForm, setValuesForm] = useState<any>(initialValues);
  const currentStep = useMemo(() => childrens[index - 1], [childrens, index]);
  const percent = useMemo(
    () => Math.floor((index / childrens.length) * 100),
    [childrens.length, index]
  );
  const isFirst = useMemo(() => index === 1, [index]);
  const isLast = useMemo(
    () => index === childrens.length,
    [childrens.length, index]
  );

  const togglePrev = () => {
    setIndex(index - 1);
  };

  const onFinish = (values: any) => {
    setValuesForm((old: any) => merge(old, values));
    if (!isLast) {
      setIndex(index + 1);
    } else {
      onComplete(valuesForm);
    }
  };

  return (
    <div className="steps-container">
      <h1>{currentStep.label}</h1>
      <div className="steps-content">
        <Progress percent={percent} showInfo={false} />
        {index && (
          <Form
            initialValues={valuesForm}
            layout="vertical"
            onFinish={(values) => onFinish(values)}
            form={form}
          >
            {currentStep.children}
          </Form>
        )}
      </div>
      <div className="footer-buttons">
        <Button
          shape="circle"
          onClick={togglePrev}
          disabled={isFirst}
          type="primary"
          icon={<ArrowLeftOutlined />}
          size="large"
        />
        <Button
          shape="circle"
          onClick={form.submit}
          type="primary"
          icon={isLast ? <CheckCircleOutlined /> : <ArrowRightOutlined />}
          size="large"
        />
      </div>
    </div>
  );
};

export default memo(Steps);
