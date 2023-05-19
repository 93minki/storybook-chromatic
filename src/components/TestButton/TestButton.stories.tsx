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

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/s9qLEDU0Opmt2qgOfcbLLL/Get-Storybook!?type=design&node-id=0-1&t=MqBcFfVe3CPg59oX-0",
  },
};
