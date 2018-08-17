/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Carousel from '../components/carousel';
import Rules from '../components/teamRules';


var img = "https://wallpaper.wiki/wp-content/uploads/2017/05/Jungle-HD-Wallpaper.jpeg"

const IndexPage = props =>
  (<div style={{ backgroundImage: `url(${img})`,backgroundRepeat  : 'no-repeat', backgroundSize: '100% 100%' }}>

    <main>
    <Carousel/>

    <Rules/>

  </main>
</div>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
