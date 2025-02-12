import type { Meta, StoryObj } from "@storybook/react";

import Author from "./Author";
import { commonMetaOptions } from "@utils/commonMetaOptions";
import { krFaker } from "@utils/krFaker";

const meta = {
  ...commonMetaOptions("Author", "centered"),
  component: Author,
} satisfies Meta<typeof Author>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: krFaker.person.fullName(),
    datetime: krFaker.date.recent(),
  },
};
