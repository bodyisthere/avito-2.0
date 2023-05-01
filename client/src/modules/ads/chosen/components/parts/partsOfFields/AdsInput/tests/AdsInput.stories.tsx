import type { Meta, StoryObj } from "@storybook/react";
import { AdsInput } from "../AdsInput";

const meta: Meta<typeof AdsInput> = {
  title: "AdsInput",
  component: AdsInput,
};

export default meta;
type Story = StoryObj<typeof AdsInput>;

export const MainAdsInput: Story = {
  args: {
    after: "км",
  }, 
};