import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Button } from 'antd';

import './ProductItem.scss';
const { Meta } = Card;

export const ProductItem = ({ imageSrc, title, subtitle, price }) => {
  return (
    <Card
      className="product-item"
      cover={<img src={imageSrc} alt={title} />}
      hoverable
    >
      <Meta title={title} description={subtitle} />
      <span className="currency">{price.toLocaleString('PT', { style: 'currency', currency: 'EUR' })}</span>
      <Button className="fav-btn" shape="circle" icon="star" />
    </Card>
  );
};

ProductItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  price: PropTypes.number.isRequired
};
