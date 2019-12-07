import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            RCM Piano Technical Requirements Randomizer
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Header;
