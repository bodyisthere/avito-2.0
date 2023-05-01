import type { Meta, StoryObj } from "@storybook/react";

import { Additional } from "../Additional";

const meta: Meta<typeof Additional> = {
  title: "Additional",
  component: Additional,
};

export default meta;
type Story = StoryObj<typeof Additional>;

export const OnlyCheckbox: Story = {
  args: {
    setForm: "",
    data: [{
      title: "Только чекбокс",
      content: ["checkbox"],
      keyField: "carBrand",
      checkboxData: ["BMW", "Audi", "Nissan"],
    }],
  },
};

export const OnlySelect: Story = {
  args: {
    setForm: "",
    data: [{
      title: "Только селект",
      content: ["select"],
      keyField: "carCondition",
      selectData: ["С пробегом", "Новая"],
    }],
  },
};

export const SelectAndCheckbox: Story = {
  args: {
    setForm: "Селект и чекбокс",
    data: [{
      title: "Тест",
      content: ["select", "checkbox"],
      keyField: "carAdditional",
      selectData: ["С пробегом", "Новая"],
      checkboxData: ["100км", "200км", "300км", "400км"],
    }],
  },
};

export const SelectCheckboxForm: Story = {
  args: {
    setForm: "Селект и чекбокс",
    data: [
      {
        title: "Тест",
        content: ["select", "checkbox"],
        keyField: "carAdditional",
        selectData: ["С пробегом", "Новая"],
        checkboxData: ["100км"],
      },
      {
        title: "Тест",
        content: ["select", "checkbox"],
        keyField: "carAdditional",
        selectData: ["С пробегом", "Новая"],
        checkboxData: ["100км", "200км", "300км", "400км", "100км", "200км", "300км", "400км"],
      },
      {
        title: "Тест",
        content: ["select", "checkbox"],
        keyField: "carAdditional",
        selectData: ["С пробегом", "Новая", "С пробегом", "Новая", "С пробегом", "Новая", "С пробегом", "Новая", "С пробегом", "Новая", "С пробегом", "Новая", "С пробегом", "Новая"],
        checkboxData: ["100км", "200км", "300км", "400км"],
      },
    ],
  },
};