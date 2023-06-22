import React, { memo, useEffect } from "react";
import styles from "./PaletteWidget.module.scss";
import PaletteList from "./PaletteList";
import { EPalette } from "../../../domain/entities/palette";
import { setMXPalette } from "../../../utils/setMXPalette";

type PaletteWidgetProps = {
  paletteType?: EPalette;
};

const mxPaletteList = [
  "mx-extra-dark",
  "mx-dark",
  "mx-main",
  "mx-medium",
  "mx-light",
  "mx-light-greyish",
  "mx-extra-light",
  "mx-white",
];

const neutralsPaletteList = [
  "neutral-active-dark",
  "neutral-black",
  "neutral-extra-dark",
  "neutral-dark",
  "neutral-medium",
  "neutral-light",
  "neutral-extra-light",
  "neutral-dark-clean",
  "neutral-light-clean",
  "neutral-active-dark-20",
];
const typographyPaletteList = ["typography-main", "typography-medium", "typography-light", "typography-subtext"];
const accentGreenPaletteList = ["accent-green-dark", "accent-green-medium", "accent-green-bright"];
const accentRedPaletteList = ["accent-red-dark", "accent-red-medium", "accent-red-bright"];
const accentYellowPaletteList = ["accent-yellow-dark", "accent-yellow-medium", "accent-yellow-bright"];
const statusPaletteList = ["status-green", "status-red"];

const PaletteWidget: React.FC<PaletteWidgetProps> = ({ paletteType = EPalette.PatientApp }) => {
  useEffect(() => {
    setMXPalette(paletteType);
  }, [paletteType]);

  return (
    <div className={styles.container}>
      <PaletteList title="MX Color" paletteList={mxPaletteList} />
      <PaletteList title="Neutrals" paletteList={neutralsPaletteList} />
      <PaletteList title="Typography" paletteList={typographyPaletteList} />
      <div>
        <PaletteList title="Accent Green" paletteList={accentGreenPaletteList} />
        <PaletteList title="Accent Red" paletteList={accentRedPaletteList} />
        <PaletteList title="Accent Yellow" paletteList={accentYellowPaletteList} />
        <PaletteList title="Status" paletteList={statusPaletteList} />
      </div>
    </div>
  );
};

export default memo(PaletteWidget);
