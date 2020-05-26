import styled from "styled-components";

export const BackgroundImage = styled.div((props) => ({
  minHeight: "100vh",
  backgroundImage: `url(${props.image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxSizing: "border-box",
}));
