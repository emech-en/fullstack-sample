import { createMuiTheme } from "@material-ui/core";
import { baseTheme } from "./theme.base";

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    primary: { main: "#FF002A" },
    secondary: { main: "#2962ff" },
  },
});
