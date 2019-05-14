import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";

const styles = (theme) => ({
  appBar: {
    ...theme.appBar
  },
  appTitle: {
    paddingRight: 32
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    opacity: 0.69,
    '&>button': {
      fontWeight: 600,
      margin: '0 4px',
      padding: '4px'
    }
  },
  activeLink: {
    opacity: 1,
  },
});

const NavBar = ({
  classes,
}) => {
  return(
    <>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography className={classes.appTitle} variant="title" color="inherit">
            Armageddon MUD Skills & Guilds
          </Typography>
          <NavLink to="/" className={classes.link} activeClassName={classes.activeLink} exact>
            <Button color="inherit">
              Index
            </Button>
          </NavLink>
          <NavLink to="/guild-picker/" className={classes.link} activeClassName={classes.activeLink} exact>
            <Button color="inherit">
              Guild Picker
            </Button>
          </NavLink>
          <NavLink to="/guild-compare/" className={classes.link} activeClassName={classes.activeLink} exact>
            <Button color="inherit">
              Guild Compare
            </Button>
          </NavLink>
          <NavLink to="/skill-picker/" className={classes.link} activeClassName={classes.activeLink} exact>
            <Button color="inherit">
              Skill Picker
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default withRouter(withStyles(styles)(NavBar));
