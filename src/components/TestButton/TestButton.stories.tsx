import type { Meta, StoryObj } from "@storybook/react";

import TestButton from "./TestButton";

const meta: Meta<typeof TestButton> = {
  title: "Components/Button",
  component: TestButton,
};

export default meta;
type Story = StoryObj<typeof TestButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    content: "Hello",
  },
};
