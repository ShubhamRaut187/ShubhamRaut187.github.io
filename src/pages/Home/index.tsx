// #region Imports
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, {useState, useRef, useEffect} from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import styled from 'styled-components';
import { Typography } from '@mui/material';

// MUI icons
import CircleIcon from '@mui/icons-material/Circle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ArrowRightAlt } from '@mui/icons-material';

import AppButton from '../../components/Button';
import Avatar from './Avatar2.png'
// endregion

gsap.registerPlugin(ScrollTrigger);

// #region Styled Components
const StyledPageWrapper = styled.div`
    align-items: center;
    display: flex;
    /* height: 600px; */
    justify-content: space-between;
    margin: 40px auto;
    width: 85%;

    @media screen and (min-width:768px) and (max-width:1024px){
        /* height: 500px; */
        width: 90%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        /* height: 500px; */
        flex-direction: column;
        width: 90%;
    }
`;

const StyledHeroDescriptionWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 55%;

    @media screen and (min-width:768px) and (max-width:1024px){
        width: 70%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        width: 100%;

        & > .profile-title-home {
            font-size: 40px;
        }

        & > .profile-roles-home {
            font-size: 32px;
        }
    }
`;

const StyledHeroAvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    position: relative;

    & > img {
        width: 80%;
        border-radius: 20px;
        transition: transform 0.3s ease;
    }

    @media screen and (min-width:768px) and (max-width:1024px){
       width: 30%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        margin-top: 20px;
    }

`;

const StyledStatus = styled.div`
    align-items: center;
    background-color: #192824;
    border: 1px solid #244E37;
    border-radius: 4px;
    display: flex;
    height: 20px;
    justify-content: center;
    margin-bottom: 40px;
    padding: 16px 36px;
`;

const StyledSocialMediaIconsWrapper = styled.div`
    align-items: center;
    display: flex;
    cursor: pointer;
    gap: 10px;
    justify-content: space-between;
    margin-top: 12px;
`;
// endregion

// #region Component
const Home: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState<boolean>(false); // Track hover state

    // Typewritter effect
    const [typeEffect] = useTypewriter({
        words:['software engineer.','back-end enthusiast', 'front-end specialist'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 100,

    });

    // Track mouse on image
    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const maxMovement = 45;
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        const xPos = (x / 100) * maxMovement;
        const yPos = (y / 100) * maxMovement;
    
        setPosition({ x: xPos, y: yPos });
      };
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    };

    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(
                ref.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
      }, []);

    return (
        <StyledPageWrapper id="Home" ref={ref}>
            <StyledHeroDescriptionWrapper>
                <StyledStatus>
                    <CircleIcon 
                      sx={{ fontSize: '12px', color: '#4ADE80' }}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <Typography
                        variant='caption'
                        sx={{ color: '#4ADE80', letterSpacing: 3 }}
                    >
                        Available for new oppotunities.
                    </Typography>
                </StyledStatus>
            <Typography 
                variant='h2'
                component={'div'}
                sx={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: '40px' }}
                className="profile-title-home"
            >
                Hello there,
            </Typography>
            <Typography 
                variant='h2'
                component={'div'}
                sx={{ color: '#4ADE80', fontWeight: 700, letterSpacing: '-0.01em' }}
                className='profile-title-home'
            >
                <span style={{ color: '#FFFFFF'}}>I'm &nbsp;</span>Shubham Raut
            </Typography>
            <Typography
                variant='h2'
                component={'div'}
                sx={{ color: '#7E7F83', fontWeight: 700, letterSpacing: '-0.01em' }}
                className='profile-roles-home'
            >
                a {typeEffect}
            </Typography>
            <Typography 
                variant='body1'
                component='div'
                sx={{ fontWeight: 500, color: '#808080', lineHeight: '24px'}}
            >
                Currently focused on building user experience that drive growth. I architect robust systems that merge technical 
                precisions with intuitive functionality.
            </Typography>
            <StyledSocialMediaIconsWrapper>
                <LinkedInIcon sx={{ color: '#FFFFFF', width: '40px', height: '40px'}}/>
                <GitHubIcon sx={{ color: '#FFFFFF', width: '35px', height: '35px'}}/>
            </StyledSocialMediaIconsWrapper>
            <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '10px' }}>
                <AppButton
                    variant='solid'
                    sx={{ height: 50, color: '#003919' }}
                >
                    View Projects&nbsp;&nbsp;
                    <ArrowRightAlt />
                </AppButton>
                <AppButton
                    variant='outline'
                    sx={{ height: 50 }}
                >
                    Get in touch &nbsp;&nbsp;
                    <EmailOutlinedIcon />
                </AppButton>
            </div>
            </StyledHeroDescriptionWrapper>
            <StyledHeroAvatarWrapper 
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            >
                <img 
                    src={Avatar} 
                    alt='avatar'
                    style={{
                        transform: isHovered
                        ? `rotate(350deg) translate(${position.x}px, ${position.y}px)`
                        : 'rotate(350deg) translate(0, 0)',
                    }}
                />
            </StyledHeroAvatarWrapper>
        </StyledPageWrapper>
    )
}
// endregion

export default Home;