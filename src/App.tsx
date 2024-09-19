import React from "react";
import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
        <GridItem area="aside">Nav</GridItem>{" "}
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>{" "}
    </Grid>
  );
}

export default App;
