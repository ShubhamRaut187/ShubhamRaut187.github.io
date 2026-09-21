import React from 'react'
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import { Typography } from '@mui/material';
import Carousels from '../../components/Carousels';
import { GALLERY_IMAGES } from './constants';

const StyledContentWrapper = styled.div`
  width: 100%;
  margin: 20px auto !important;
`;
const Gallery = () => {
  return (
    <PageWrapper>
         <Typography variant='h3' component='div' sx={{ color: '#808080', fontWeight: 600 }}>
            Gallery
        </Typography>
        <StyledContentWrapper>
            <Carousels content={GALLERY_IMAGES}/>
        </StyledContentWrapper>
    </PageWrapper>
  )
}

export default Gallery;