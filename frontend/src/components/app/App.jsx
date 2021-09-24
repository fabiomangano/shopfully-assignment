import React, {useState} from 'react';
import useLocalStorage from '../../hooks/use-local-storage/useLocalStorage';
import FlyerList from '../flyer-list/FlyerList';
import MainLayout from '../layouts/main-layout/MainLayout';
import AppContext from '../../context/AppContext';

const App = () => {
  const [favouritesFromStorage] = useLocalStorage('favourites', []);
  const [favourites, setFavourites ] = useState(favouritesFromStorage);

  return (
    <AppContext.Provider value={{favourites: favourites, setFavourites}}>
      <MainLayout>
        <FlyerList />
      </MainLayout>
    </AppContext.Provider>
  );
}

export default App;
