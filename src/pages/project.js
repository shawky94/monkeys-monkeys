/* global graphql */

import React from 'react';
import Banner from '../components/banner';



var img = "http://worldofdtcmarketing.com/wp-content/uploads/2015/04/jungle-forest.jpg"

const project = props =>
  (<div style={{ backgroundImage: `url(${img})`,backgroundRepeat  : 'no-repeat', backgroundSize: '100% 100%', minHeight: '1000px' }}>

    <main>

    <Banner bannerText="there is no projects yet!" bannerTitle="project card"/>
  </main>
</div>);

export default project;
