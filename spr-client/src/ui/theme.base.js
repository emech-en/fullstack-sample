import { createMuiTheme } from "@material-ui/core";

export const baseTheme = createMuiTheme({
  props: {
    MuiCheckbox: {
      size: "small",
    },
  },
  shape: {
    borderRadius: 30,
  },
  typography: {
    fontSize: 12,
  }
});
