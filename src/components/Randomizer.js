import React, { useState } from 'react';
import { Container, Grid, Fab, Typography, Button } from '@material-ui/core';
import { ArrowForward, Check, Clear } from '@material-ui/icons';
import { SYLLABUS, SECTIONS, SECTIONS_BY_LEVEL } from '../Constants';
import { makeStyles } from '@material-ui/core/styles';
import { useRef } from 'react';

const useStyles = makeStyles({
  root: {
    width: '150px',
    height: '150px',
  },
  arrowForward: {
    width: '60px',
    height: '60px',
  },
  successFab: {
    backgroundColor: '#4caf50', // green
    color: '#fff',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  errorFab: {
    backgroundColor: '#f44336', // red
    color: '#fff',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  successButton: {
    color: '#4caf50',
  },
  errorButton: {
    color: '#f44336',
  },
});

const Randomizer = ({ level }) => {
  const classes = useStyles();

  const [display, setDisplay] = useState("Let's get started!");
  const [displayLine2, setDisplayLine2] = useState('');
  const [inSession, setInSession] = useState(false);

  const currentKey = useRef('');
  const currentIndex = useRef(-1);
  const incorrects = useRef(new Set());
  const sectionIndex = useRef(0);

  const syllabus = SYLLABUS[level];

  const sectionIndexes = SECTIONS_BY_LEVEL[level];
  const sections = SECTIONS_BY_LEVEL[level].map((i) => SECTIONS[i]);

  const onButtonClick = (correct) => {
    if (correct) {
      incorrects.current.delete(
        JSON.stringify([currentKey.current, currentIndex.current])
      );
    }

    if (
      correct &&
      incorrects.current.size === 0 &&
      sectionIndex.current > sections.length - 1
    ) {
      setDisplay('You have completed one set!');
      setDisplayLine2('How about another?');
      setInSession(false);
      sectionIndex.current = 0;
      return;
    }

    if (!inSession) {
      setInSession(true);
    }

    const showIncorrect =
      sectionIndex.current > sections.length - 1 ||
      (incorrects.current.size > 0 && Math.random() < 0.3);

    let chosen;

    if (showIncorrect) {
      const items = Array.from(incorrects.current);
      const item = items[Math.floor(items.length * Math.random())];
      chosen = JSON.parse(item);
    } else {
      let randomKey = '';
      let keys = Object.keys(syllabus);

      while (!randomKey) {
        const key = keys[Math.floor(keys.length * Math.random())];
        if (syllabus[key].includes(sectionIndexes[sectionIndex.current])) {
          randomKey = key;
        }
      }
      chosen = [randomKey, sectionIndex.current];
      sectionIndex.current++;
    }

    if (!correct) {
      incorrects.current.add(
        JSON.stringify([currentKey.current, currentIndex.current])
      );
    }

    currentKey.current = chosen[0];
    currentIndex.current = chosen[1];

    setDisplay(`${currentKey.current} ${sections[currentIndex.current][0]}`);
    setDisplayLine2(sections[currentIndex.current][1]);
  };

  return (
    <Container maxWidth='sm'>
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h5'>{display}</Typography>
        <Typography variant='h5'>{displayLine2}</Typography>
        {inSession ? (
          <div style={{ marginTop: '25px' }}>
            <Grid container>
              <Grid item xs={6}>
                <Fab
                  className={`${classes.root} ${classes.successFab}`}
                  onClick={() => onButtonClick(true)}
                >
                  <Check className={classes.arrowForward} />
                </Fab>
              </Grid>
              <Grid item xs={6}>
                <Fab
                  className={`${classes.root} ${classes.errorFab}`}
                  onClick={() => onButtonClick(false)}
                >
                  <Clear className={classes.arrowForward} />
                </Fab>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className={classes.successButton}
                  onClick={() => onButtonClick(true)}
                >
                  I got it right
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className={classes.errorButton}
                  onClick={() => onButtonClick(false)}
                >
                  Test me again later
                </Button>
              </Grid>
            </Grid>
          </div>
        ) : (
          <>
            <div style={{ marginTop: '25px' }}>
              <Fab
                className={classes.root}
                color='primary'
                onClick={() => onButtonClick(true)}
              >
                <ArrowForward className={classes.arrowForward} />
              </Fab>
            </div>
            <div>
              <Button color='primary' onClick={() => onButtonClick(true)}>
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Randomizer;
