import React from "react";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>{" "}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Nav
        </GridItem>{" "}
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Nav
      </GridItem>{" "}
    </Grid>
  );
}

export default App;
