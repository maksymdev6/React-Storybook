import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default {
  component: Menu,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Search",
    },
    mode: {
      type: "select",
      options: ["inline", "horizontal"],
      defaultValue: "inline",
    },
    theme: {
      type: "select",
      options: ["light", "dark"],
      defaultValue: "light",
    },
    inlineCollapsed: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template = ({ ...args }) => {
  const { SubMenu } = Menu;
  return (
    <div style={{ width: args.mode === "inline" ? "256px" : "100%" }}>
      <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} {...args}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
};

export const Vertical = Template.bind({});

Vertical.args = {
  mode: "inline",
};

export const Horizontal = Template.bind({});

Horizontal.args = {
  mode: "horizontal",
};