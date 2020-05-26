import { createMuiTheme } from "@material-ui/core";
import { baseTheme } from "./theme.base";

export const lightTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "light",
    primary: { main: "#FF002A" },
    secondary: { main: "#2962ff" },
  },
});
