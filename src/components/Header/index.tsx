import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import styled from 'styled-components';
import IconComponent from '../IconComponent';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DrumSound from '../../Audio/drum.mp3';

const pages: String[] = ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'];
const StyledMenu = styled(Menu)`
  & > .MuiPaper-root {
    width: 100%;
    top: 80px !important;
    left: 16px !important;
    background-color: transparent !important;
    backdrop-filter: blur(10px) !important;
    box-shadow: none !important;
    border-radius: 8px !important;

    & > ul > li {

        & > p {
            color: #FFFFFF !important;
            font-family: "Inter", serif !important;
            font-size: 16px !important;
        }

    }

    @media screen and (min-width:768px) and (max-width:1024px){
      width: 78% !important;
      left: 90px !important;
      top: 90px !important;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 87% !important;
      left: 25px !important;
      top: 90px !important;
    }

  }
`;

const StyledContainer = styled(Container)`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`;


const StyledAppBar = styled(AppBar)`
  position: sticky !important;
  z-index: 10 !important;
  top: 20px;
  width: 85% !important;
  /* background-color: rgba(21, 47, 68, 0.8) !important; */
  /* background-color: #121417 !important; */
  background-color: transparent !important;
  backdrop-filter: blur(10px) !important;
  margin: 20px auto;
  border-radius: 8px;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  box-shadow: none !important;

  @media screen and (min-width:768px) and (max-width:1024px){
    width: 90% !important;
  }

  @media screen and (min-width:320px) and (max-width:767px){
    width: 90% !important;
  }

`;

const StyledToolbar = styled(Toolbar)`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100%;
  padding: 0 16px;
  width: 100% !important;
`;

const StyledBox = styled(Box)`
  width: 500px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    display: none; 
  }

`;

const StyledButtonBox = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    display: none;
  }

`;

const StyledButton = styled(Button)`
  font-family: "Kumbh Sans", serif !important;
  font-size: 16px !important;
`;

const StyledDownloadButton = styled(Button)`
    text-transform: none !important;
    border-color: #32333C !important;
    background-color: #32333C !important;
    color: #4ADE80 !important;
    font-family: "Kumbh Sans", serif !important;
`;

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const playSound = () => {
    const audio = new Audio(DrumSound);
    audio.play().catch((err) => {
      console.error("Error playing sound:", err);
    });
  };

  return (
    <StyledAppBar position="static">
      <StyledContainer maxWidth="xl">
        <StyledToolbar disableGutters>
          <IconComponent src={'../../../public/s-logo.svg'} height="50px" width="50px" filter="brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(190%) hue-rotate(232deg) brightness(115%) contrast(100%)" />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {
                pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))
               }
                <MenuItem>
                    <StyledDownloadButton variant="outlined" >
                        <FileDownloadOutlinedIcon sx={{ marginRight: '10px'}}/>
                        Download Resume
                    </StyledDownloadButton>
                </MenuItem>
            </StyledMenu>
          </Box>
          <StyledBox>
            {
                pages.map((page) => (
                <StyledButton
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                >
                    {page}
                </StyledButton>
                ))
            }
          </StyledBox>
          <StyledButtonBox>
            <StyledDownloadButton variant="outlined" onClick={() => {
              playSound();
            }}>
              <FileDownloadOutlinedIcon sx={{ marginRight: '10px'}}/>
              Download Resume
            </StyledDownloadButton>
          </StyledButtonBox>
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  );
};

export default Header;
