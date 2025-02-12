import type { Meta, StoryObj } from "@storybook/react";

import MenuButton from "./MenuButton";
import { commonMetaOptions } from "@utils/commonMetaOptions";

const meta = {
  ...commonMetaOptions("MenuButton", "centered"),
  component: MenuButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "test",
  },
  render: (args) => <MenuButton {...args} />,
};
