import React from "react";
import { Container, Typography, Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    textAlign: "center"
  }
});

const LevelSelected = ({ level, onChange }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <Typography align="center" gutterBottom={true} variant="subtitle1">
          You have selected level {level}
        </Typography>
        <div>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={onChange}
          >
            Select Different Level
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default LevelSelected;
