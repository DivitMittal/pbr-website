import React, { useState, useEffect } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu} from './container';
import { Navbar,Loading} from './components';
import './App.css';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : null}
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  );
};

export default App;