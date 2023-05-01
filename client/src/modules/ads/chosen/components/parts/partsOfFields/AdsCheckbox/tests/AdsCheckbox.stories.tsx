import type { Meta, StoryObj } from "@storybook/react";
import { AdsCheckbox } from "../AdsCheckbox";

const meta: Meta<typeof AdsCheckbox> = {
  title: "AdsCheckbox",
  component: AdsCheckbox,
};

export default meta;
type Story = StoryObj<typeof AdsCheckbox>;

export const MainAdsCheckbox: Story = {
  args: {
    data: ["BMW", "Audi", "Nissan"],
  }, 
};