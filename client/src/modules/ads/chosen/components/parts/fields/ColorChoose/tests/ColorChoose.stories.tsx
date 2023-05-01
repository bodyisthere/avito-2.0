import type { Meta, StoryObj } from "@storybook/react";
import { ColorChoose } from "../ColorChoose";

const meta: Meta<typeof ColorChoose> = {
  title: "ColorChoose",
  component: ColorChoose,
};

export default meta;
type Story = StoryObj<typeof ColorChoose>;

export const ColorChooseError: Story = {
  args: {
    activeColor: "Белый",
    validationErrors: ["color"],
  }, 
};

export const ColorChooseSuccess: Story = {
  args: {
    activeColor: "Белый",
    validationErrors: [""],
  }, 
};
