import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypographyWidget from "./components/TypographyWidget";

export default {
  title: "Typography",
  component: TypographyWidget,
} as ComponentMeta<typeof TypographyWidget>;

const Template: ComponentStory<typeof TypographyWidget> = (args) => <TypographyWidget {...args} />;

export const Base = Template.bind({});
Base.args = {
  headingH1Text: "Heading H1 - 24/32",
  headingH2Text: "Heading H2 - 18/24",
  headingH3Text: "Heading H3 - 16/24",
  pMainText: "Paragraph Main – 14/20",
  pSmallText: "Paragraph Small – 12/16",
};
