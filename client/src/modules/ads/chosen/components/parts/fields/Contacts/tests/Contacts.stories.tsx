import type { Meta, StoryObj } from "@storybook/react";
import { Contacts } from "../Contacts";

const meta: Meta<typeof Contacts> = {
  title: "Contacts",
  component: Contacts,
};

export default meta;
type Story = StoryObj<typeof Contacts>;

export const MainContacts: Story = {
  args: {
    setForm: "",
  }, 
};