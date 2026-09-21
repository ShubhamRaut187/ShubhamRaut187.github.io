import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Card {
  picture: string,
}

const StyledCarouselCard = styled.div<Card>`
  width: 800px;
  height: 600px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  /* background: linear-gradient(to right, #d9d9d91f, #7373731f) !important; */

  .background {
    width: 100%;
    height: 100%;
    background: url(${(props) => props.picture});
    transition: filter 0.3s ease-in-out;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #d9d9d91f, #7373731f) !important;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: 20px;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }

  &:hover .background {
    filter: blur(4px) brightness(0.7);
  }

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface Props {
  picture: string,
  description: string,
  title: string,
}
const CarouselCard: React.FC<Props> = ({ picture, description, title }) => {
  return (
    <StyledCarouselCard picture={picture}>
      <div className="background"></div>
      <div className="overlay">
      <Typography variant='h4' component='div' sx={{ color: '#FFFFFF', marginBottom: '10px', fontWeight: 600}}>
          {title}
        </Typography>
        <Typography variant='body1' component='div'>
          {description}
        </Typography>
      </div>
    </StyledCarouselCard>
  );
};

export default CarouselCard;
