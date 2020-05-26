import React from "react";
import { LoginPage } from "./pages";
import { ThemeProvider } from "./ui";

function App() {
  return (
    <ThemeProvider>
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
