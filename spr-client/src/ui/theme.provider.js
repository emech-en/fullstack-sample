import "typeface-roboto";
import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { darkTheme } from "./theme.dark";
import { lightTheme } from "./theme.light";

export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

  const theme = React.useMemo(
    () => createMuiTheme(prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
