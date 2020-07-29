import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import dadosInicias from './data/dados_iniciais.json';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      
      <BannerMain 
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"O que é front-end"}
      />

      <Carousel 
        category={dadosInicias.categorias[0]}
      />

      <Carousel 
        category={dadosInicias.categorias[1]}
      />

      <Carousel 
        category={dadosInicias.categorias[3]}
      />

      <Footer></Footer>
    </div>
  );
}

export default App;
