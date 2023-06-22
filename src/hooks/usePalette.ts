import { EPalette } from "../domain/entities/palette";
import { useEffect } from "react";
import { setMXPalette } from "../utils/setMXPalette";

type UsePalette = (paletteType: EPalette) => void;

export const usePalette: UsePalette = (paletteType = EPalette.PatientApp) => {
  useEffect(() => {
    if (paletteType === EPalette.DoctorApp) {
      setMXPalette(EPalette.DoctorApp);
    }
  }, [paletteType]);
};
