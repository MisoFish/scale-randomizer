import React, { useState } from "react";
import _ from "lodash";
import { Container, Fab, Typography, Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { SYLLABUS, SECTIONS, SECTIONS_BY_LEVEL } from "../Constants";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "150px",
    height: "150px"
  },
  arrowForward: {
    width: "60px",
    height: "60px"
  }
});

const Randomizer = ({ level }) => {
  const classes = useStyles();

  const [display, setDisplay] = useState("Let's get started!");
  const [displayLine2, setDisplayLine2] = useState("");
  const [counter, setCounter] = useState(-1);

  const syllabus = SYLLABUS[level];

  const sectionIndexes = SECTIONS_BY_LEVEL[level];
  const sections = SECTIONS_BY_LEVEL[level].map(i => SECTIONS[i]);

  let i = counter;
  //console.log('set i to counter');

  const onButtonClick = () => {
    if (i >= sections.length - 1) {
      setDisplay("You have completed one set!");
      setDisplayLine2("How about another?");
      setCounter(-1);
    } else {
      //console.log(i);

      i++;
      //console.log(i);
      let randomKey = "";
      let keys = Object.keys(syllabus);

      while (!randomKey) {
        randomKey = keys[(keys.length * Math.random()) << 0];
        if (!syllabus[randomKey].includes(sectionIndexes[i])) {
          randomKey = "";
        }
      }
      setDisplay(`${randomKey} ${sections[i][0]}`);
      setDisplayLine2(sections[i][1]);
      setCounter(i);
    }
  };

  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5">{display}</Typography>
        <Typography variant="h5">{displayLine2}</Typography>
        <div style={{ marginTop: "25px" }}>
          <Fab className={classes.root} color="primary" onClick={onButtonClick}>
            <ArrowForward className={classes.arrowForward} />
          </Fab>
        </div>
        <div>
          <Button color="primary" onClick={onButtonClick}>
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Randomizer;
