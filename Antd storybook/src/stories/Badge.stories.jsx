import React from "react";
import { Badge, Avatar } from "antd";

export default {
  component: Badge,
  argTypes: {
    count: {
      type: "select",
      options: [0, 3, 24, 106],
      defaultValue: 3,
    },
    size: {
        type: "select",
        options: ["default", "small", "large"],
        defaultValue: "default"
    },
    color: {
      type: "select",
      options: [
        "pink",
        "red",
        "yellow",
        "orange",
        "cyan",
        "green",
        "blue",
        "purple",
        "geekblue",
        "magenta",
        "volcano",
        "gold",
        "lime",
      ],
      defaultValue: "pink",
    },
    overflowCount: {
       type: "select",
       options: [0, 10, 25, 110]
    },
    showZero: {
      type: "boolean",
      defaultValue: false,
    },
    standalone: {
        type: "boolean",
        defaultValue: false
    }
  },
};

const Template = (args) => {
    if (args.overflowCount === 0) delete args.overflowCount;
  return (
    <>
      <Badge {...args}>
        {args.standalone === false ? (
          <Avatar shape="square" size="large" />
        ) : (
          ""
        )}
      </Badge>
    </>
  );
};

export const BadgeComponent = Template.bind({});

BadgeComponent.args = {};
