import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const button: ComponentStory<typeof Button> = () => (
  <Button label="テスト" />
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const button2 = Template.bind({});
button2.args = { label: "ぱたーん２" };
