import type { Meta, StoryObj } from "@storybook/react";
import { Description } from "../Description";

const meta: Meta<typeof Description> = {
  title: "Description",
  component: Description,
};

export default meta;
type Story = StoryObj<typeof Description>;

const setFunction = (key: string, value: any) => undefined;

export const DescriptionError: Story = {
  args: {
    form: {},
    setFunction,
    validationErrors: ["description"],
  }, 
};

export const DescriptionSuccess: Story = {
  args: {
    form: {},
    setFunction,
    validationErrors: [""],
  }, 
};