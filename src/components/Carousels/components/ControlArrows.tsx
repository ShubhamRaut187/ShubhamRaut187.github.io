import React from 'react'
import styled from 'styled-components'
import { SvgIconProps } from '@mui/material';

const StyledControlArrow = styled.div`
  cursor: pointer;
`;

interface Props {
  operation: string,
  arrowIcon: React.ComponentType<SvgIconProps>;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const ControlArrows: React.FC<Props> = ({ operation, arrowIcon: ArrowIcon, onClick }) => {
  if ( operation && operation === 'next') {
    return (
      <StyledControlArrow onClick={onClick}>
        <ArrowIcon sx={{ color: '#808080' , width: '60px', height: '60px' }}/>
      </StyledControlArrow>
    );
  }
  return (
    <StyledControlArrow onClick={onClick}>
      <ArrowIcon sx={{ color: '#808080' , width: '60px', height: '60px'}}/>
    </StyledControlArrow>
  )
}

export default ControlArrows;