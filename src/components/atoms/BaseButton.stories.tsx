import type { Meta, StoryObj } from "@storybook/react";

import BaseButton from "./BaseButton";
import { fn } from "@storybook/test";
import { commonMetaOptions } from "@utils/commonMetaOptions";

const meta = {
  ...commonMetaOptions("BaseButton", "centered"),
  component: BaseButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["contained", "outlined", "text"] },
    rounded: { control: "boolean" },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "brand"],
    },
    normalize: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "contained",
    rounded: true,
    label: "로그인하기",
    color: "brand",
    normalize: false,
  },
  render: (args) => <BaseButton {...args} />,
};
