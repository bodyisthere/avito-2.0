import type { Meta, StoryObj } from "@storybook/react";
import { CarBody } from "../CarBody";

import "../../../../../../app/styles/index.scss";

const meta: Meta<typeof CarBody> = {
  title: "CarBody",
  component: CarBody,
};

const setFunction = (key: string, value: any) => undefined;

export default meta;
type Story = StoryObj<typeof CarBody>;

export const MainCarBody: Story = {
  args: {
    form: "",
    setFunction: setFunction,
  }, 
};