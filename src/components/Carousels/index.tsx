import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick"; 
import CarouselCard from './components/CarouselCard';
import ControlArrows from './components/ControlArrows';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//carousel
const StyledCarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > div.slick-slider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 600px;
        @media screen and (min-width:768px) and (max-width:1024px){
            
        }

        @media screen and (min-width: 320px) and (max-width: 767px) {
           width: 100%;
        }

        & .slick-slide {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

interface Content {
    image: string,
    description: string,
    name: string,
    title: string,
}

interface Props {
    content: Content[],
}

const Carousels: React.FC<Props> = ({ content }) => {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <ControlArrows operation='next' arrowIcon={ChevronRightIcon}/>,
        prevArrow: <ControlArrows operation='previous' arrowIcon={ChevronLeftIcon}/>
      };
  return (
    <StyledCarouselWrapper className="slider-container">
        <Slider {...settings}>
            {
                content.map((occasion) => {
                    return (
                        <CarouselCard picture={occasion.image} description={occasion.description} key={occasion.name} title={occasion.title}/>
                    );
                })
            }
        </Slider>
    </StyledCarouselWrapper>
  )
}

export default Carousels; 