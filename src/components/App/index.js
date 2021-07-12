// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <Footer />
  </div>
);

// == Export
export default App;
