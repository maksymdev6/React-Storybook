import React from "react";
import { Collapse } from "antd";

export default {
  component: Collapse,
  argTypes: {
    activeKey: {
      type: "select",
      options: ["None", 1, 2, 3],
      defaultValue: "None",
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
  },
};

const Template = ({ defaultActiveKey, ...args }) => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <Collapse {...args} defaultActiveKey={[`${args.activeKey}`]}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export const CollapseComponent = Template.bind({});
