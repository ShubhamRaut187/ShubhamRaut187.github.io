import styled from 'styled-components';
import { Typography } from '@mui/material';
// import CopyrightIcon from '@mui/icons-material/Copyright';

const StyledFooter = styled.div`
    width: 85%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* border: 2px solid red; */
    margin: 20px auto;
`;
const Footer = () => {
  return (
    <StyledFooter>
        <Typography variant='body1' sx={{ color: '#808080'}}>
            2025 Shubham Raut © 
            {/* <CopyrightIcon/> */}
        </Typography>
        <Typography variant='body1' sx={{ color: '#808080'}}>
            Designed with love, developed by passion
        </Typography>
        <Typography variant='body1' sx={{ color: '#808080'}}>
            All Rights Reversed
        </Typography>
    </StyledFooter>
  )
}

export default Footer;