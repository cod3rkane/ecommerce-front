import React, { Component } from 'react';

import { ProductItem } from '../../components/ProductItem';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <header>header</header>
        <div className="product-content">
          <ProductItem
            imageSrc="https://cdn-images.farfetch-contents.com/13/41/29/80/13412980_15345021_300.jpg"
            title="Burberry"
            subtitle="Lightweight bomber jacket"
            price={790}
          />
          <ProductItem
            imageSrc="https://cdn-images.farfetch-contents.com/13/41/29/80/13412980_15345021_300.jpg"
            title="Burberry"
            subtitle="Lightweight bomber jacket"
            price={790}
          />
          <ProductItem
            imageSrc="https://cdn-images.farfetch-contents.com/13/41/29/80/13412980_15345021_300.jpg"
            title="Burberry"
            subtitle="Lightweight bomber jacket"
            price={790}
          />
          <ProductItem
            imageSrc="https://cdn-images.farfetch-contents.com/13/41/29/80/13412980_15345021_300.jpg"
            title="Burberry"
            subtitle="Lightweight bomber jacket"
            price={790}
          />
          <ProductItem
            imageSrc="https://cdn-images.farfetch-contents.com/13/41/29/80/13412980_15345021_300.jpg"
            title="Burberry"
            subtitle="Lightweight bomber jacket"
            price={790}
          />
          <ProductItem
            imageSrc="https://cdn-images.farfetch-contents.com/13/41/29/80/13412980_15345021_300.jpg"
            title="Burberry"
            subtitle="Lightweight bomber jacket"
            price={790}
          />
        </div>
      </div>
    );
  }
}

export default Home;
