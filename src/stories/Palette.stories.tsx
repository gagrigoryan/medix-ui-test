import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PaletteWidget from "./components/PaletteWidget";
import { EPalette } from "../domain/entities/palette";

export default {
  title: "Palette",
  component: PaletteWidget,
} as ComponentMeta<typeof PaletteWidget>;

const Template: ComponentStory<typeof PaletteWidget> = (args) => <PaletteWidget {...args} />;

export const PatientApp = Template.bind({});
PatientApp.args = {
  paletteType: EPalette.PatientApp,
};

export const DoctorApp = Template.bind({});
DoctorApp.args = {
  paletteType: EPalette.DoctorApp,
};
