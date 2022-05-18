import React from "react";
import { Result, Button } from "antd";

export default {
  component: Result,
  argTypes: {
    title: {
      type: "string"
    },
    subTitle: {
      type: "string"
    },
    status: {
      type: "string"
    },
  },
};


const Template = (args) => {
  return (
    <Result
    {...args}
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  );
};

export const ErrorResult = Template.bind({});

ErrorResult.args = {
  status: "error",
  title: "Error",
};

export const SuccessResult = Template.bind({});

SuccessResult.args = {
  status: "success",
  title: "success",
};

export const ForbidenResult = Template.bind({});

ForbidenResult.args = {
  status: "403",
  title: "Forbidden",
};

export const WarningResult = Template.bind({});

WarningResult.args = {
  status: "warning",
  title: "Warning",
};

export const NotFoundResult = Template.bind({});

WarningResult.args = {
  status: "404",
  title: "Not Found",
};

export const SubTitleResult = Template.bind({});

SubTitleResult.args = {
  status: "info",
  title: "Successfully Purchased Cloud Server ECS!",
  subTitle:
    "Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",
};
