import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from '@mui/material/Divider';
// import {products} from './productData'
import "./slide.css";
import { NavLink } from 'react-router-dom';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const Slide = ({title, products}) => {
  return (
    <div className='products_section'>
        <div className="products_deal">
            <h3>{title}</h3>
            <button className='view_btn'>View All</button>
        </div>
        <Divider/>

        <Carousel
            responsive={responsive}
            infinite={true}
            draggable={true}
            swipeable={true}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            >
            {
                products.map((product) => {
                    return (
                      <NavLink to={`/getproductsone/${product.id}`}>
                        <div className="products_items" key={product.id}>
                            <div className="product_img">
                                <img src={product.url} alt="" />
                            </div>
                            <p className='products_name'>{product.title.shortTitle}</p>
                            <p className='products_offer'>{product.discount}</p>
                            <p className='products_explore'>{product.tagline}</p>
                        </div>
                      </NavLink>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Slide
