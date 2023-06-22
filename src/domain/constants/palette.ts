enum MXPaletteType {
  MXExtraDark = "--mx-extra-dark",
  MXDark = "--mx-dark",
  MXMain = "--mx-main",
  MXMedium = "--mx-medium",
  MXLight = "--mx-light",
  MXLightGreyish = "--mx-light-greyish",
  MXExtraLight = "--mx-extra-light",
  MXWhite = "--mx-white",
}

type MXColor = Record<MXPaletteType, string>;

export const MXDoctorPalette: MXColor = {
  [MXPaletteType.MXExtraDark]: "#0049AD",
  [MXPaletteType.MXDark]: "#005AD3",
  [MXPaletteType.MXMain]: "#2F80ED",
  [MXPaletteType.MXMedium]: "#68A9FF",
  [MXPaletteType.MXLight]: "#A7CAF7",
  [MXPaletteType.MXLightGreyish]: "#C7DBF3",
  [MXPaletteType.MXExtraLight]: "#F0F6FE",
  [MXPaletteType.MXWhite]: "#F6FAFF",
};

export const MXPatientPalette: MXColor = {
  [MXPaletteType.MXExtraDark]: "#007680",
  [MXPaletteType.MXDark]: "#18929e",
  [MXPaletteType.MXMain]: "#2dbbc7",
  [MXPaletteType.MXMedium]: "#6bcbd5",
  [MXPaletteType.MXLight]: "#9edfe5",
  [MXPaletteType.MXLightGreyish]: "#d7ebef",
  [MXPaletteType.MXExtraLight]: "#eafbfd",
  [MXPaletteType.MXWhite]: "#f3fcfd",
};
