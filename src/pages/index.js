/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Carousel from '../components/carousel';
import Rules from '../components/teamRules';


var img = "http://worldofdtcmarketing.com/wp-content/uploads/2015/04/jungle-forest.jpg"

const IndexPage = props =>
  (<div style={{ backgroundImage: `url(${img})`,backgroundRepeat  : 'no-repeat', backgroundSize: '100% 100%' }}>

    <main>
    <Rules/>
    <Carousel/>
    <Features data={props.data.allDataJson.edges[0].node.features} />
    <HowTo data={props.data.allDataJson.edges[0].node.howTo} />
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
