import type { Meta, StoryObj } from "@storybook/react";
import { AutoNumber } from "../AutoNumber";

const meta: Meta<typeof AutoNumber> = {
  title: "AutoNumber",
  component: AutoNumber,
};

export default meta;
type Story = StoryObj<typeof AutoNumber>;

export const MainAutoNumber: Story = {
  args: {
    autoNumber: {main: "1ООО11", region: 777},
    optionKey: "autoNumber",
  }, 
};