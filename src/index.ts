import "./styles/palette.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import { usePalette } from "./hooks/usePalette";
import { setMXPalette } from "./utils/setMXPalette";
import { EPalette } from "./domain/entities/palette";
import { EIconSize } from "./domain/entities/icon";
import { ENumberPickerSize } from "./domain/entities/field";
import { EPopupSize } from "./components";

export * from "./components";
export { setMXPalette, usePalette };
export { EPalette, EIconSize, ENumberPickerSize, EPopupSize };
