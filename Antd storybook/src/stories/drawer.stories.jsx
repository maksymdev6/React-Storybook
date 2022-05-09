import React from 'react';
import { Radio } from 'antd';

export default {
    components: Radio,
    argTypes: {}
}


const Template = (args) => {
    const [value1, setValue1] = React.useState('Apple');
    const [value2, setValue2] = React.useState("Apple");
    const [value3, setValue3] = React.useState("Apple");
    const [value4, setValue4] = React.useState("Apple");

    const plainOptions = ["Apple", "Pear", "Orange"];
    const options = [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange" },
    ];
    const optionsWithDisabled = [
      { label: "Apple", value: "Apple" },
      { label: "Pear", value: "Pear" },
      { label: "Orange", value: "Orange", disabled: true },
    ];

    return (
      <>
        <Radio.Group
          options={plainOptions}
          onChange={(e) => setValue1(e.target.value)}
          value={value1}
        />
        <br />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={(e) => setValue2(e.target.value)}
          value={value2}
        />
        <br />
        <br />
        <Radio.Group
          options={options}
          onChange={(e) => setValue3(e.target.value)}
          value={value3}
          optionType="button"
        />
        <br />
        <br />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={(e) => setValue4(e.target.value)}
          value={value4}
          optionType="button"
          buttonStyle="solid"
        />
      </>
    );
}

export const RadioButton = Template.bind({});

RadioButton.args = {};
