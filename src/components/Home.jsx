import React from 'react';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="content">
        <h2 className="hero-heading">Welcome to <span className="coffee-shop-name">QScript Coffee</span></h2>
        <p className="hero-description">Indulge in our specialty coffee crafted with passion and precision. Accompany your brew with our delectable assortment of pastries, each bite a symphony of flavors. Experience the perfect blend of taste and ambiance at QScript Coffee.</p>
        <a href="/contact" className="btn">Contact Us</a>
      </div>
    </section>
  );
}

export default Home;
