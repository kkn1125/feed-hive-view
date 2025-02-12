import type { Meta, StoryObj } from "@storybook/react";

import FeedForm from "./FeedForm";
import { commonMetaOptions } from "@utils/commonMetaOptions";
import { Stack } from "@mui/material";

const meta = {
  ...commonMetaOptions("MenuButton", "centered"),
  component: FeedForm,
  tags: ["autodocs"],
} satisfies Meta<typeof FeedForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actionName: "피드 올리기",
    isUser: false,
  },
  render: (args) => (
    <Stack
      direction="column"
      width="50vw"
      height="100%"
      justifyContent="center"
    >
      <FeedForm {...args} />
    </Stack>
  ),
};
