import React from "react";
import { Form, Input, Button } from "antd";

export default {
  component: Form,
  argTypes: {
    layout: {
      type: "select",
      options: ["horizontal", "vertical", "inline"],
      defaultValue: "vertical",
    },
    formItems: {
      type: "select",
      options: [2,3,4,5],
      defaultValue: 2,
    },
  },
};

const Template = ({ formItems, ...args }) => {
  return (
    <Form {...args}>
      {[...Array(formItems).keys()].map(() => {
        return (
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
        );
      })}
      <Form.Item>
        <Button type="primary" block>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export const FormLayout = Template.bind({});

FormLayout.args = {
    layout: "horizontal",
    formItems: 2,
};
