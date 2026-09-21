import React from 'react'
import styled from 'styled-components';

interface StyledProps {
    width: string,
    height: string,
    borderradius: string,
    bgColor?: string,
}

interface Props extends StyledProps {
    source: string,
    imageName: string,
}

const StyledImageContainer = styled.div<StyledProps>`
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '100px'};
    border-radius: ${(props) => props.borderradius || 'none'};
    background-color: ${(props) => props.bgColor || 'transparent' };
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const ImageContainer: React.FC<Props> = ({ source, imageName, width, height, borderradius, bgColor }) => {
  return (
    <StyledImageContainer width={width} height={height} borderradius={borderradius} bgColor={bgColor}>
        <img src={source} alt={imageName} style={{ borderRadius: borderradius }}/>
    </StyledImageContainer>
  )
}

export default ImageContainer;