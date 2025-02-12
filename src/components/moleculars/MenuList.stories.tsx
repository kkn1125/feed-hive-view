import type { Meta, StoryObj } from "@storybook/react";

import MenuList from "./MenuList";
import { commonMetaOptions } from "@utils/commonMetaOptions";

const meta = {
  ...commonMetaOptions("MenuList", "centered"),
  component: MenuList,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
