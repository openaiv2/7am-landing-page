export const neutral = {
  "00": "#141416",
  "01": "#1F2128",
  "02": "#2E3038",
  "03": "#343841",
  "04": "#777E90",
  "05": "#B1B5C3",
  "06": "#E6E8EC",
  "07": "#F4F5F6",
  "08": "#FCFCFD",
};

export const brand = {
  b2b: {
    "light-1": "#6894FE",
    "light-2": "#9AB7FE",
    "light-3": "#CBDAFE",
    "light-4": "#F0F4FD",
    main: "#3772FF",
    "dark-1": "#315EC9",
    "dark-2": "#2B4A93",
    "dark-3": "#25355E",
    "dark-4": "#262B36",
  },
  b2c: {
    main: "#DBFF73",
  },
};

export const success = {
  "light-1": "#73C490",
  "light-2": "#A0D7B4",
  "light-3": "#CEEAD8",
  "light-4": "#ECF8F0",
  main: "#45B26B",
  "dark-1": "#3C8E5A",
  "dark-2": "#326A4A",
  "dark-3": "#284539",
  "dark-4": "#242E2A",
};

export const warning = {
  "light-1": "#F4CC74",
  "light-2": "#F7DCA2",
  "light-3": "#FAECCF",
  "light-4": "#FCF7EF",
  main: "#F2BC46",
  "dark-1": "#BD953F",
  "dark-2": "#886E37",
  "dark-3": "#544830",
  "dark-4": "#312D25",
};

export const error = {
  "light-1": "#F27781",
  "light-2": "#F6A3AB",
  "light-3": "#F9D0D4",
  "light-4": "#FCECED",
  main: "#EF4658",
  "dark-1": "#BB404C",
  "dark-2": "#873640",
  "dark-3": "#532C34",
  "dark-4": "#362A2D",
};

export const info = {
  "light-1": "#CB7BD4",
  "light-2": "#DCA6E2",
  "light-3": "#ECD1EF",
  "light-4": "#F9EFFA",
  main: "#BB50C6",
  "dark-1": "#94449E",
  "dark-2": "#6D3877",
  "dark-3": "#462D50",
  "dark-4": "#302734",
};

export const color = {
  light: {
    brand: {
      primary: brand.b2b.main,
      "shade-1": brand.b2b["light-1"],
      "shade-2": brand.b2b["light-2"],
      "shade-3": brand.b2b["light-3"],
      "shade-4": brand.b2b["light-4"],
    },
    text: {
      primary: neutral["01"],
      secondary: neutral["04"],
      tertiary: neutral["05"],
      "button-normal": neutral["08"],
      "primary-mirrored": neutral["08"],
      "tertiary-mirrored": neutral["04"],
      "secondary-mirrored": neutral["05"],
      "button-mirrored-dark-light": neutral["01"],
      "button-mirrored-light-dark": neutral["08"],
    },
    fill: {
      hover: {
        primary: brand.b2b["dark-1"],
        secondary: neutral["06"],
        mirrored: neutral["00"],
        success: success["dark-1"],
        warning: warning["dark-1"],
        error: error["dark-1"],
        info: info["dark-1"],
      },
      surface: {
        primary: neutral["07"],
        secondary: neutral["08"],
        tertiary: neutral["07"],
        quaternary: neutral["06"],
        quinary: neutral["05"],
        mirrored: neutral["01"],
        "form-control": neutral["06"],
        contextual: {
          success: {
            main: success.main,
            "shade-1": success["light-1"],
            "shade-2": success["light-2"],
            "shade-3": success["light-3"],
            "shade-4": success["light-4"],
          },
          warning: {
            main: warning.main,
            "shade-1": warning["light-1"],
            "shade-2": warning["light-2"],
            "shade-3": warning["light-3"],
            "shade-4": warning["light-4"],
          },
          error: {
            main: error.main,
            "shade-1": error["light-1"],
            "shade-2": error["light-2"],
            "shade-3": error["light-3"],
            "shade-4": error["light-4"],
          },
          info: {
            main: info.main,
            "shade-1": info["light-1"],
            "shade-2": info["light-2"],
            "shade-3": info["light-3"],
            "shade-4": info["light-4"],
          },
        },
      },
    },
    border: {
      primary: neutral["06"],
      secondary: neutral["07"],
      tertiary: neutral["06"],
    },
    material: {
      "modal-background": "#F4F5F6CC",
      "lightbox-background": "#141416CC",
      "blur-img": "#F4F5F6CC",
    },
  },
  dark: {
    brand: {
      primary: brand.b2b.main,
      "shade-1": brand.b2b["dark-1"],
      "shade-2": brand.b2b["dark-2"],
      "shade-3": brand.b2b["dark-3"],
      "shade-4": brand.b2b["dark-4"],
    },
    text: {
      primary: neutral["08"],
      secondary: neutral["05"],
      tertiary: neutral["04"],
      "button-normal": neutral["08"],
      "primary-mirrored": neutral["01"],
      "tertiary-mirrored": neutral["05"],
      "secondary-mirrored": neutral["04"],
      "button-mirrored-dark-light": neutral["08"],
      "button-mirrored-light-dark": neutral["00"],
    },
    fill: {
      hover: {
        primary: brand.b2b["light-1"],
        secondary: neutral["03"],
        mirrored: neutral["08"],
        success: success["light-1"],
        warning: warning["light-1"],
        error: error["light-1"],
        info: info["light-1"],
      },
      surface: {
        primary: neutral["00"],
        secondary: neutral["01"],
        tertiary: neutral["02"],
        quaternary: neutral["03"],
        quinary: neutral["04"],
        mirrored: neutral["07"],
        "form-control": neutral["02"],
        contextual: {
          success: {
            main: success.main,
            "shade-1": success["dark-1"],
            "shade-2": success["dark-2"],
            "shade-3": success["dark-3"],
            "shade-4": success["dark-4"],
          },
          warning: {
            main: warning.main,
            "shade-1": warning["dark-1"],
            "shade-2": warning["dark-2"],
            "shade-3": warning["dark-3"],
            "shade-4": warning["dark-4"],
          },
          error: {
            main: error.main,
            "shade-1": error["dark-1"],
            "shade-2": error["dark-2"],
            "shade-3": error["dark-3"],
            "shade-4": error["dark-4"],
          },
          info: {
            main: info.main,
            "shade-1": info["dark-1"],
            "shade-2": info["dark-2"],
            "shade-3": info["dark-3"],
            "shade-4": info["dark-4"],
          },
        },
      },
    },
    border: {
      primary: neutral["01"],
      secondary: neutral["02"],
      tertiary: neutral["03"],
    },
    material: {
      "modal-background": "#141416CC",
      "lightbox-background": "#141416CC",
      "blur-img": "#1F2128CC",
    },
  },
};
