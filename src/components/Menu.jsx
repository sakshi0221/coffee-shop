import React from 'react';

const Menu = () => {
  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-item">
          <h3>Espresso</h3>
          <p>Intense, rich coffee served in a small cup. Perfect for those who love strong coffee.</p>
        </div>
        <div className="menu-item">
          <h3>Cappuccino</h3>
          <p>Equal parts espresso, steamed milk, and milk foam. A classic Italian coffee drink.</p>
        </div>
        <div className="menu-item">
          <h3>Latte</h3>
          <p>Espresso with steamed milk and a small amount of milk foam. Creamy and smooth.</p>
        </div>
        <div className="menu-item">
          <h3>Croissant</h3>
          <p>Flaky pastry made with butter and rolled into a crescent shape. Perfect for breakfast or a snack.</p>
        </div>
        <div className="menu-item">
          <h3>Muffin</h3>
          <p>Soft, cake-like pastry typically filled with fruits or nuts. Goes well with coffee.</p>
        </div>
        <div className="menu-item">
          <h3>Scone</h3>
          <p>Delicious baked pastry often flavored with fruits or spices. Perfect for a morning treat.</p>
        </div>
        <div className="menu-item">
          <h3>Americano</h3>
          <p>Espresso diluted with hot water, resulting in a milder flavor. Great for those who prefer a lighter coffee.</p>
        </div>
        <div className="menu-item">
          <h3>Flat White</h3>
          <p>Similar to a latte but with a higher ratio of coffee to milk, resulting in a stronger coffee flavor.</p>
        </div>
      </div>
    </section>
  );
}

export default Menu;
