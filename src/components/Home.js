import React from 'react';
import Search from '../containers/Search';
import CarsList from '../containers/CarsList';
const Home = (props) => {
  return (
    <div>
      <Search />
      <CarsList />
    </div>
  );
};
export default Home;
