import type { Meta, StoryObj } from "@storybook/react";

import { LOGO_BLACK, LOGO_COLOR } from "@utils/constant";
import Logo from "./Logo";
import { commonMetaOptions } from "@utils/commonMetaOptions";

const meta = {
  ...commonMetaOptions("Logo", "centered"),
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    url: { control: "select", options: [LOGO_COLOR, LOGO_BLACK] },
    type: { control: "select", options: ["color", "black"] },
    size: { control: "number" },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: LOGO_COLOR,
    type: "color",
    size: 48,
  },
};
