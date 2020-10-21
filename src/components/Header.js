import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: "none",
    cursor: "pointer",
    color: "#fff",
    flexGrow: 1,
  },
  button: {
    margin: 2.5,
  },
  a: {
    textDecoration: "none",
    cursor: "pointer",
    color: "#fff",
  },
  purchaseButton: {
    textDecoration: "none",
    cursor: "pointer",
    color: theme.palette.secondary.light,
  },
}));

const ButtonAppBar = ({ auth }) => {
  console.log(auth);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              underline="none"
              color="inherit"
              component={RouterLink}
              to={!auth ? "/" : "/dashboard"}>
              Emailer
            </Link>
          </Typography>

          {!auth ? (
            <Fragment>
              <Button
                variant="outlined"
                color="inherit"
                className={classes.button}>
                <a className={classes.a} href="/auth/google">
                  Login
                </a>
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                className={classes.button}>
                Sign Up
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}>
                <Link
                  underline="none"
                  className={classes.purchaseButton}
                  component={RouterLink}
                  to="/purchase/credits">
                  Purchase Credits
                </Link>
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                className={classes.button}>
                <Link
                  underline="none"
                  className={classes.title}
                  component={RouterLink}
                  to="/survey/new">
                  Credits: {`${auth.credits}`}
                </Link>
              </Button>

              <Button
                variant="outlined"
                color="inherit"
                className={classes.button}>
                <a className={classes.a} href="/auth/logout">
                  Logout
                </a>
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(ButtonAppBar);
