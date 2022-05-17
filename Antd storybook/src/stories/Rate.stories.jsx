import React from "react";
import { Rate } from "antd";

export default {
  component: Rate,
  argTypes: {
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    character: {
      type: "select",
      options: [ "None","A", "好"],
      defaultValue: "None"
    },
    allowHalf: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  if(args.character === "None") delete args.character;
  return (
    <>
      <Rate {...args} defaultValue={3}  style={{ fontSize: 36}}/>
    </>
  );
};

export const RateButton = Template.bind({});

RateButton.args = {};
