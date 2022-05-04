import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default {
  component: Button,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Search",
    },
    type: {
      type: "select",
      options: ["default", "primary", "dashed", "text", "link"],
      defaultValue: "default",
    },
    shape: {
      type: "select",
      options: ["None", "circle"],
      defaultValue: "None",
    },
    size: {
      type: "select",
      options: ["default", "small", "large"],
      defaultValue: "default",
    },
    ghost: {
      type: "boolean",
      defaultValue: false,
    },
    block: {
      type: "boolean",
      defaultValue: false,
    },
    loading: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    showIcon: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template = ({ title, ...args }) => {
  return (
    <div
      style={{
        background: args.ghost === true ? "rgb(190, 200, 200)" : "",
        padding: args.ghost === true ? "26px 16px 16px" : "",
      }}
    >
      {args.showIcon === true ? (
        <>
          <Button {...args} icon={<SearchOutlined />}></Button>
        </>
      ) : (
        <Button {...args}>{title}</Button>
      )}
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  type: "default",
  size: "default",
  loading: false,
  disabled: false,
};
