import React from "react";
import _ from "lodash";
import { Container, Fab, Button, Typography } from "@material-ui/core";

import { LOWEST_LEVEL, HIGHEST_LEVEL_PLUS_1, LEVELS } from "../Constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    paddingTop: "30px"
  },
  button: {
    fontSize: "xxx-large",
    paddingRight: "35px",
    paddingLeft: "35px"
  }
});



const LevelSelector = ({ onChange }) => {
  const classes = useStyles();

  const LevelButtons = () => {
    const handleClick = event => {
      onChange(event.target.innerHTML);
    };
    const levels = LEVELS.map(level => (
      <Button className={classes.button} color="primary" onClick={handleClick}>{level}</Button>
    ));
    return <div>{levels}</div>;
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography className={classes.root} variant="h5">Select your level:</Typography>
      <LevelButtons />
    </Container>
  );
};

export default LevelSelector;
