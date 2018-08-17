/* global graphql */

import React from 'react';
import Banner from '../components/banner';



var img = "http://worldofdtcmarketing.com/wp-content/uploads/2015/04/jungle-forest.jpg"

const schedule = props =>
  (<div style={{ backgroundImage: `url(${img})`,backgroundRepeat  : 'no-repeat', backgroundSize: '100% 100%', minHeight: '1000px' }}>

    <main>
      <Banner bannerText="meeting #1" bannerTitle="Sunday"/>
      <Banner bannerText="meeting #2" bannerTitle="Monday"/>
      <Banner bannerText="meeting #3" bannerTitle="Tusday"/>
      <Banner bannerText="meeting #4" bannerTitle="Wednesday"/>
      <Banner bannerText="meeting #5" bannerTitle="Thuresday"/>
    </main>
</div>);

export default schedule;
