
// #region Imports
import * as React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Toolbar, IconButton, Typography, Menu, Container, MenuItem } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { PAGES } from '../../pages/constants'
import IconComponent from '../IconComponent';
import DrumSound from '../../Audio/drum.mp3';
//#endregion

// #region Styled Components
const StyledMenu = styled(Menu)`
	& > .MuiPaper-root {
		background-color: transparent !important;
		backdrop-filter: blur(10px) !important;
		border-radius: 8px !important;
		box-shadow: none !important;
		left: 16px !important;
		top: 80px !important;
		width: 100%;

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
	align-items: center !important;
    display: flex !important;
    justify-content: center !important;
`;


const StyledAppBar = styled(AppBar)`
	align-items: center !important;
	backdrop-filter: blur(10px) !important;
	background-color: transparent !important;
	border-radius: 8px;
	box-shadow: none !important;
	display: flex !important;
	justify-content: space-between !important;
	margin: 20px auto;
	position: sticky !important;
	top: 20px;
	width: 85% !important;
	z-index: 10 !important;

	@media screen and (min-width:768px) and (max-width:1024px){
		width: 90% !important;
	}

	@media screen and (min-width:320px) and (max-width:767px){
		width: 90% !important;
	}

`;

const StyledToolbar = styled(Toolbar)`
	align-items: center !important;
	display: flex !important;
	justify-content: space-between !important;
	padding: 0 16px;
	width: 100% !important;
`;

const StyledBox = styled(Box)`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 500px !important;

	@media (max-width: 1023px) {
		display: none; 
	}

`;

const StyledButtonBox = styled(Box)`
	align-items: center;
	display: flex;

	@media (max-width: 1023px) {
		display: none;
	}

`;

const StyledButton = styled(Button)`
	font-family: "Inter", serif !important;
	font-size: 16px !important;
`;

const StyledDownloadButton = styled(Button)`
    border-color: #32333C !important;
    background-color: #32333C !important;
	color: #4ADE80 !important;
	font-family: "Inter", serif !important;
	text-transform: none !important;
`;
// #endregion

const Header: React.FC = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleScrollToSection = (page: string) => {
		const sectionId = page.toLowerCase();
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		setAnchorElNav(null);
	};

	const handleDownloadResume = () => {
		const link = document.createElement('a');
		link.href = '/Shubham_Raut_Resume.pdf';
		link.download = 'Shubham_Raut_Resume.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		const audio = new Audio(DrumSound);
		audio.play().catch((err) => {
			console.error("Error playing sound:", err);
		});
	};

	return (
		<StyledAppBar position="static">
			<StyledContainer maxWidth="xl">
				<StyledToolbar disableGutters>
					<IconComponent src={'https://res.cloudinary.com/dhrz0u8ut/image/upload/v1790138485/s-logo_jjbxef.svg'} height="50px" width="50px" filter="brightness(0) saturate(100%) invert(84%) sepia(17%) saturate(1586%) hue-rotate(78deg) brightness(92%) contrast(87%);" />
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
							PAGES.map((page) => (
								<MenuItem onClick={() => { handleScrollToSection(page) }}>
									<Typography variant='body2' sx={{ fontWeight: 600, textAlign: 'center' }}>{page}</Typography>
								</MenuItem>
							))
						}
							<MenuItem>
								<StyledDownloadButton 
									variant="outlined"
									onClick={handleDownloadResume}
								>
									<FileDownloadOutlinedIcon sx={{ marginRight: '10px'}}/>
									Download Resume
								</StyledDownloadButton>
							</MenuItem>
						</StyledMenu>
					</Box>
					<StyledBox>
						{
							PAGES.map((page) => (
							<StyledButton
								onClick={() => { handleScrollToSection(page) }}
								sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
							>
								<Typography variant='body2' sx={{ fontWeight: 600 }}>{page}</Typography>
							</StyledButton>
							))
						}
					</StyledBox>
					<StyledButtonBox>
						<StyledDownloadButton 
							variant="outlined" 
							onClick={() => {
								handleDownloadResume();
							}}
						>
							<FileDownloadOutlinedIcon sx={{ marginRight: '10px'}}/>
							<Typography variant='body2' sx={{ fontWeight: 900 }}>Download Resume</Typography>
						</StyledDownloadButton>
					</StyledButtonBox>
				</StyledToolbar>
			</StyledContainer>
		</StyledAppBar>
	);
};

export default Header;
