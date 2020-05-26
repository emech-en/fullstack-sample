import React from "react";
import { Box } from "atomic-layout";
import Card from "@material-ui/core/Card";
import { BackgroundImage } from "../../components";
import { LoginForm } from "./login.form";
import background from "../../assets/login-bg.jpg";

export const LoginPage = () => {
  return (
    <BackgroundImage image={background}>
      <Box
        as={Card}
        elevation={10}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        widthMd={400}
        marginHorizontalMd={60}
        marginBottomMd={120}
      >
        <LoginForm />
      </Box>
    </BackgroundImage>
  );
};
