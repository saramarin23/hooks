import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Grid,
  TextField,
  Button
} from "@material-ui/core";

import styles from "./style";

import Icon from "@material-ui/core/Icon";

export default () => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

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
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Bienvenido!</Typography>
          </Grid>
          <Grid>
            <label>{/* <TheatersIcon /> */}</label>
            <Icon className={classes.movieIcon}>theatersicon</Icon>
          </Grid>
        </Grid>
        <TextField
          value={searchText}
          placeholder="Buscar..."
          onChange={handleSearchTextChange}
          className={classes.textFieldContainer}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handleResetText}>
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.searchButton}
            onClick={handleSearchText}
          >
            Search
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
