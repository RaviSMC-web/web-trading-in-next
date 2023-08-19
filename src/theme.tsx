"use client";

import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";

interface ThemeProp {
  children: React.ReactNode;
}

const getPalletFromTheme = (theme = "dark"): ThemeOptions => {
  if (theme === "dark") {
    return {
      palette: {
        mode: "dark",
        background: {
          default: "#1c1e21",
          paper: "#191927",
        },
        primary: {
          main: "#0CA750",
        },
        text: {
          primary: "#EEEEEE",
          secondary: "#ABABAB",
        },
      },
    };
  }
  return {
    palette: {
      mode: "light",
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },
      primary: {
        main: "#3AA29F",
      },
      text: {
        primary: "#424242",
        secondary: "#707070",
      },
    },
  };
};

const theme = createTheme(getPalletFromTheme());
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
