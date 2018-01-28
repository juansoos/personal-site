import React from 'react';
import HomeLayout from '../layout/components/home-layout';
import Header from '../layout/components/header';
import HomeContent from '../content/components/home';

const Home = () => (
  <HomeLayout>
    <Header />
    <HomeContent />
  </HomeLayout >
);

export default Home;
