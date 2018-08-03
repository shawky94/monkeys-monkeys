import React from "react";
import Slider from "react-slick";
import Image from 'react-image-resizer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon from '../icon';
import Table from '../table';
import Nour from '../images/nour.png';
import Shawky from '../images/shawky.jpg';
import attalla from '../images/attalla.jpg';


import Constants from '../../../constants.js';

import './_carousel.scss';


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      stopOnHover:false,
      arrows: false,
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <section className="carousel" id="carousel">
      <h2>
        about our team
      </h2>
      <br/>
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">

              <Slider {...settings}>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src="https://prototype-interactive.imgix.net/images/team/divya.jpg?w=393&q=60&auto=format" />
                </div>
                <div>
                  <Table name={"Divia"} role={"Account Manager"}></Table>
                </div>
                <div>
                  <img style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src ="https://prototype-interactive.imgix.net/images/team/manal.jpg?w=393&q=60&auto=format" />
                </div>
                <div>
                  <Table name={"Manal"} role={"Project Manager"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src={Nour} />
                </div>
                <div>
                  <Table name={"Nour"} role={"Digital Strategy"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src={Shawky} />
                </div>
                <div>
                  <Table name={"Shawky"} role={"Developer"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src="https://prototype-interactive.imgix.net/images/team/victor.jpg?w=393&q=60&auto=format" />
                </div>
                <div>
                  <Table name={"Victor"} role={"Developer"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src={attalla} />
                </div>
                <div>
                  <Table name={"Attala"} role={"Developer"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src="https://prototype-interactive.imgix.net/images/team/rob.jpg?w=393&q=60&auto=format" />
                </div>
                <div>
                  <Table name={"Rob"} role={"Technical Manager"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src="https://prototype-interactive.imgix.net/images/team/rizvi.jpg?w=393&q=60&auto=format" />
                </div>
                <div>
                  <Table name={"Rizvi"} role={"Developer"}></Table>
                </div>
                <div>
                  <img  style={{height: Constants.CAROUSEL_HEIGHT, width:'100%'}} src="https://prototype-interactive.imgix.net/images/team/allan.jpg?w=393&q=60&auto=format" />
                </div>
                <div>
                  <Table name={"Allen"} role={"Bussiness developer"}></Table>
                </div>
              </Slider>

          </div>
        </div>
        </div>
        </section>
    );
  }
}
export default SimpleSlider;
