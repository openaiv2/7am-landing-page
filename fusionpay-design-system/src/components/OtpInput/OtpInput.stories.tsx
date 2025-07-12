import { Meta, StoryObj } from "@storybook/react";
import OtpInput, { OTPInputProps } from "./OtpInput";
import React, { useState } from "react";
import { faSquare } from "@fortawesome/pro-solid-svg-icons";

function OtpInputExample({ resendCodeTimeLeft }: OTPInputProps) {
  const [value, setValue] = useState<string>();

  return (
    <OtpInput
      onChange={(e) => setValue(e)}
      value={value}
      didNotReceiveCodeMessage={"I didn’t receive the code"}
      didNotReceiveCodeActionLabel={"Resend Code"}
      helperText={"Helper text"}
      helperTextIcon={faSquare}
      resendCodeTimeLeft={resendCodeTimeLeft}
      label={"One time pin"}
      labelInfo={"Label Info"}
    />
  );
}

const meta: Meta<typeof OtpInput> = {
  title: "OtpInput",
  component: OtpInputExample,
  decorators: (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {};

export const ResendCode: Story = {
  args: {
    resendCodeTimeLeft: "4min",
  },
};
