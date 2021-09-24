import React, { useState, useCallback, useContext } from 'react';
import FlyerCard from '../flyer-card/FlyerCard';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Grid } from '@material-ui/core';
import AppContext from '../../context/AppContext';
import useLocalStorage from '../../hooks/use-local-storage/useLocalStorage';

const DEFAULT_PAGE_SIZE = 100;

const FlyerList = () => {
  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const { favourites, setFavourites } = useContext(AppContext);
  // eslint-disable-next-line
  const [_, setStorageFavourites] = useLocalStorage('favourites', []);

  const handleFavourite = useCallback((item, isFavourite) => () => {
    let updatedFavourites;

    if (isFavourite) {
      const indexToDelete = favourites.indexOf(item);
      updatedFavourites = [
        ...favourites.slice(0, indexToDelete),
        ...favourites.slice(indexToDelete + 1, favourites.length)
      ];
    } else {
      updatedFavourites = [...favourites, item];
    }

    setFavourites(updatedFavourites);
    setStorageFavourites(updatedFavourites);
  }, [favourites, setFavourites, setStorageFavourites]);

  const fetchData = useCallback(async () => {
    setIsFetching(true);
    try {
      if (hasNextPage) {
        const res = await fetch(`http://localhost:3000/api/v1/flyers?page=${page}&limit=${DEFAULT_PAGE_SIZE}&date=2019-04-30`);
        const { data, paging } = await res.json();
        setItems([...items, ...data]);

        const hasNext = page < paging.lastPage;
        setHasNextPage(hasNext)

        if (hasNext) {
          setPage(page + 1)
        }
      }
    } catch (error) {
      setIsError(true);
    }
    setIsFetching(false);
  }, [items, page, hasNextPage]);

  const infiniteRef = useInfiniteScroll({
    loading: isFetching,
    hasNextPage,
    onLoadMore: fetchData,
  });

  return (
    <div ref={infiniteRef}>
      {isError && <p>Something went wrong...</p>}
      {items && (
        <Grid container spacing={2}>
          {items.map((item) => {
            const isFavourite = favourites.find(i => i.id === item.id);
            return (
              <Grid
                key={item.id}
                item
                xs={6} sm={3}
              >
                <FlyerCard
                  id={item.id}
                  title={item.title}
                  retailer={item.retailer}
                  category={item.category}
                  isFavourite={isFavourite}
                  handleFavourite={handleFavourite(item, isFavourite)}
                />
              </Grid>
            )
          })}
        </Grid>
      )}
      {isFetching && <p>Loading flyers...</p>}
    </div>
  );
};

export default FlyerList;
