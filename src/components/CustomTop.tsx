import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  //   width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const topPlay: React.CSSProperties = {
  width: '10 px'
}
const CustomCarousel: React.FC = () => (

  <Carousel autoplay style={{ ...topPlay, width: '100%' }}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default CustomCarousel;