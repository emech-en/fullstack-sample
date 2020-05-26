import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";

export const VisiblePassword = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleIsVisible = () => {
    setIsVisible((old) => !old);
  };

  return (
    <TextField
      {...props}
      type={isVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleIsVisible}
            >
              {isVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
