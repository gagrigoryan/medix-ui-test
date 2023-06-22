import { EPalette } from "../domain/entities/palette";
import { MXDoctorPalette, MXPatientPalette } from "../domain/constants/palette";

export const setMXPalette = (paletteType: EPalette) => {
  const rootElement = document.documentElement;
  const palette = paletteType === EPalette.PatientApp ? MXPatientPalette : MXDoctorPalette;

  Object.entries(palette).forEach(([key, value]) => {
    rootElement.style.setProperty(key, value);
  });
};
