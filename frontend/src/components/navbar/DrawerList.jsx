import React, { useContext } from 'react';
import { 
  MenuList,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography
} from '@material-ui/core';

import AppContext from '../../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const DrawerList = () => {
  const classes = useStyles();
  const { favourites } = useContext(AppContext);
  return (
    <div>
      <div className={classes.toolbar} />
      <div className={classes.section1}>
        <Typography variant="h6" className={classes.sectionTitle}>
          Favourites
        </Typography >
        <Typography>
          The list of yours preferred flyers
        </Typography>
      </div>
      <Divider />
      {favourites.length > 0 && (
        <MenuList>
          {favourites.map((favourite) => (
              <MenuItem key={favourite.id}>
                <ListItemIcon>
                  <FavoriteIcon color="primary" />
                </ListItemIcon >
                <Typography variant="inherit">{favourite.title}</Typography>
              </MenuItem>
          ))}
        </MenuList>
      )}
    </div>
  )
}

export default DrawerList;





