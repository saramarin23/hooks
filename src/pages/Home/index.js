import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

export default () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleResetText = event => {
    console.log("Reset");
  };

  const handleSearchText = event => {
    console.log("Search");
  };

  return (
    <Container>
      <Card>
        <Grid container>
          <Grid>
            <Typography>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <label>Icono</label>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
        />
        <Grid>
          <Button variant="contained" onClick={handleResetText}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearchText}
          >
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
