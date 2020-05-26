import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LockIcon from "@material-ui/icons/Lock";
import { VisiblePassword } from "../../components";
import { Box } from "atomic-layout";
import Styled from "styled-components";
import logo from "../../assets/logo.png";
import { FormGroup, makeStyles, useTheme } from "@material-ui/core";

const LogoImage = Styled.img`
    width: 150px;
    height: 150px;
    align-self: center;
`;

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
  },
  checkbox: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));

export const LoginForm = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      flex={true}
      flexDirection={"column"}
      alignContent={"center"}
      padding={theme.spacing(4)}
      paddingHorizontal={theme.spacing(4)}
      paddingSm={theme.spacing(6)}
      paddingHorizontalSm={theme.spacing(6)}
      paddingMd={theme.spacing(7)}
      paddingHorizontalMd={theme.spacing(8)}
    >
      <LogoImage src={logo} alt={"Performance Review Logo"} />
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Login to access your
        <br />
        Performance Review Panel
      </Typography>

      <FormControl className={classes.form}>
        <FormGroup>
          <TextField
            name={"username"}
            label={"Username"}
            autoComplete={"username"}
            variant="outlined"
            margin="dense"
          />
        </FormGroup>
        <FormGroup>
          <VisiblePassword
            name="password"
            label="Password"
            autoComplete="current-password"
            variant="outlined"
            margin="dense"
          />
        </FormGroup>
        <FormGroup className={classes.checkbox}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            title="Remember Me"
            label="Remember Me"
          />
        </FormGroup>
        <FormGroup>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LockIcon />}
            size="large"
          >
            Login
          </Button>
        </FormGroup>
      </FormControl>
    </Box>
  );
};
