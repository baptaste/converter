// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';
import data from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies
      currencies={data}
    />
    <Footer />
  </div>
);

// == Export
export default App;
