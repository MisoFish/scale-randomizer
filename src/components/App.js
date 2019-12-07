import React, { useState } from "react";
import _ from "lodash";
import { Grid } from "@material-ui/core";

import Randomizer from "./Randomizer";
import LevelSelected from "./LevelSelected";
import LevelSelector from "./LevelSelector";
import Header from "./Header";
import { LOWEST_LEVEL, HIGHEST_LEVEL_PLUS_1 } from "../Constants";

const App = () => {
  const [level, setLevel] = useState(localStorage.getItem("level"));

  const selectLevel = level => {
    localStorage.setItem("level", level);
    setLevel(level);
  };

  const changeLevel = () => {
    localStorage.clear();
    setLevel("");
  };

  if (_.inRange(level, LOWEST_LEVEL, HIGHEST_LEVEL_PLUS_1)) {
    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Randomizer level={level} />
          </Grid>

          <Grid item xs={12}>
            <LevelSelected level={level} onChange={changeLevel} />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <LevelSelector onChange={selectLevel} />
      </div>
    );
  }
};

export default App;
