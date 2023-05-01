import type { Meta, StoryObj } from "@storybook/react";
import { Count } from "../Count";

const meta: Meta<typeof Count> = {
  title: "Count",
  component: Count,
};

export default meta;
type Story = StoryObj<typeof Count>;

export const CountError: Story = {
  args: {
    form: {},
    setFunction: () => undefined,
  }, 
};