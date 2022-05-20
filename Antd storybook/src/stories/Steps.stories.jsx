import React from "react";
import { Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export default {
  component: Steps,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    useIcons: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  const [current, setCurrent] = React.useState(0);
  const { Step } = Steps;
  return (
    <Steps
      {...args}
      current={current}
      onChange={(current) => setCurrent(current)}
    >
      {args.useIcons === true ? (
        <>
          <Step status="finish" title="Login" icon={<UserOutlined />} />
          <Step
            status="finish"
            title="Verification"
            icon={<SolutionOutlined />}
          />
          <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </>
      ) : (
        <>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </>
      )}
    </Steps>
  );
};

export const Story = Template.bind({});

Story.args = {};
