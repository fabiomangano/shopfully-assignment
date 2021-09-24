import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../navbar/Navbar";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function MainLayout(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default MainLayout;