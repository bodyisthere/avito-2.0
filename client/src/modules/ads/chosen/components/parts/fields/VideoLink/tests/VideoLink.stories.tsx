import type { Meta, StoryObj } from "@storybook/react";

import { VideoLink } from "../VideoLink";

const meta: Meta<typeof VideoLink> = {
  title: "VideoLink",
  component: VideoLink,
};

export default meta;
type Story = StoryObj<typeof VideoLink>

const setFunction = (key: string, value: any) => undefined;

export const Main: Story = {
  args: {
    setFunction,
    optionKey: "video",
    value: "",
  },
};