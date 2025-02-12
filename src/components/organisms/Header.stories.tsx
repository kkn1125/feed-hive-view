import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";
import { commonMetaOptions } from "@utils/commonMetaOptions";

const meta = {
  ...commonMetaOptions("Header", "fullscreen"),
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
