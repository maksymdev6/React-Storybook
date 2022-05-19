import React from "react";
import { Slider } from 'antd';

export default {
  component: Slider,
  argTypes: {
    value: {
      type: "select",
      options: [0, 25, 50, 80, 100],
      defaultValue: 0,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    tooltipVisible: {
        type: "boolean",
        defaultValue: false
    }
  },
};

const Template = (args) => {
    return <Slider {...args}/>;
}

export const SliderComponent = Template.bind({});

SliderComponent.args = {
    value: 80
}