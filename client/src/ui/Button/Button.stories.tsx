import React from "react";
import { Button } from "..";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import "../../app/styles/index.scss";


export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const MainButton  = Template.bind({});

MainButton.args = {
  background: "lightblue",
  children: "text",
};