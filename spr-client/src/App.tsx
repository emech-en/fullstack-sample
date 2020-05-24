import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Composition } from "atomic-layout";

const template = `
  header
  content
  footer
`;

function App() {
  return (
    <Composition
      areas={template}
      templateRows={"100px 1fr 100px"}
      style={{ minHeight: "100vh" }}
    >
      {(Area) => (
        <>
          <Area.Header>HEADER</Area.Header>
          <Area.Content className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Area.Content>
          <Area.Footer>FOOTER</Area.Footer>
        </>
      )}
    </Composition>
  );
}

export default App;
