import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { 
  Card, 
  CardMedia,
  CardContent,
  IconButton,
  Typography
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import LazyLoad from 'react-lazyload';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  content: {
    paddingTop: '10px',
    paddingBottom: '0'
  },
  retailer: {
    textTransform: "uppercase",
    fontSize: 11,
  }
}));

const FlyerCard = ({
  id,
  title,
  retailer,
  category,
  isFavourite,
  handleFavourite,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <LazyLoad 
        height={300}
      >
        <CardMedia
          className={classes.media}
          image={`https://placehold.it/300x250?text=${id}`}
          title={title}
        />
      </LazyLoad>
      <CardContent className={classes.content}>
        <Typography
          variant="body2"
          color="textSecondary"
          noWrap
          gutterBottom
          className={classes.retailer}
        >
          {retailer}
        </Typography>

        <Typography
          variant="body1"
          color="textPrimary"
          component="h4"
          noWrap
          gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
          {category}
        </Typography>
      </CardContent>

      <IconButton
        aria-label="add to favorites"
        onClick={handleFavourite}
        className={classes.icon}
      >
        <FavoriteIcon color={isFavourite ? "primary" : "disabled"} />
      </IconButton >
    </Card>
  );
}

export default FlyerCard;