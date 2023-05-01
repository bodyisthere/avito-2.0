import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxList } from "../CheckboxList";

const meta: Meta<typeof CheckboxList> = {
  title: "CheckboxList",
  component: CheckboxList,
};

export default meta;
type Story = StoryObj<typeof CheckboxList>;

export const CheckboxListError: Story = {
  args: {
    fieldTitle: "Бренд",
    data: ["BMW", "Audi", "Nissan"],
    optionKey: "carBrand",
    validate: {
      validationErrors: ["carBrand"],
      validationMessage: "Укажите бренд автомобиля",
    },
  }, 
};

export const CheckboxListSuccess: Story = {
  args: {
    fieldTitle: "Бренд",
    data: ["BMW", "Audi", "Nissan"],
    optionKey: "carBrand",
    validate: {
      validationErrors: [""],
      validationMessage: "Укажите бренд автомобиля",
    },
  }, 
};