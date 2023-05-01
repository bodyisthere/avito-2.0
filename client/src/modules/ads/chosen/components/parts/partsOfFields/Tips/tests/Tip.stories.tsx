import type { Meta, StoryObj } from "@storybook/react";
import { Tip } from "../Tip";

const meta: Meta<typeof Tip> = {
  title: "Tip",
  component: Tip,
};

export default meta;
type Story = StoryObj<typeof Tip>;

export const VIN: Story = {
  args: {
    type: "VIN(номер кузова)",
  }, 
};

export const NDS: Story = {
  args: {
    type: "НДС",
  }, 
};

export const PTS: Story = {
  args: {
    type: "ПТС машины",
  }, 
};

export const CarCondition: Story = {
  args: {
    type: "Состояние машины",
  }, 
};

export const MainTip: Story = {
  args: {
    type: "Цена",
  }, 
};