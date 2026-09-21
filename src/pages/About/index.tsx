// #region Imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React,{ useRef } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

// MUI Icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import AppButton from "../../components/Button";
// endregion

// #region Styled Components
const StyledPageWrapper = styled.div`
    margin: 40px auto 140px auto;
    width: 85%;
    @media screen and (min-width:768px) and (max-width:1024px){
       width: 90%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 90%;
    }
`;

const StyledAboutWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;

    & > .page-about-info {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        width: 46%;

        & > .page-about-info-container {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 36px;
        }

        & > .page-about-info-action {
            align-items: center;
            display: flex;
            justify-content: flex-start;
            gap: 10px;
        }
    }

    & > .page-about-decription {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        width: 40%;
    }

    @media screen and (min-width:768px) and (max-width:1024px){
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
        & > .page-about-info {
            width: 100%;
        }
        & > .page-about-decription {
            width: 100%;
        }
    }

`;
// endregion

// #region Component
const About: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.fromTo(
            ref.current,
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    // trigger: ref.current,
                    // start: "top 85%",
                    // toggleActions: "play none none reverse",
                    // invalidateOnRefresh: true,
                    trigger: ref.current,
                    start: "top 60%",
                    end: "top 40%",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            }
        );
        ScrollTrigger.refresh();
    },
    {
        scope: ref 
    });

  return (
    <StyledPageWrapper ref={ref}>
        <StyledAboutWrapper>
            <div className="page-about-info">
                <div page-about-info-title>
                     <Typography
                        variant="h2"
                        sx={{ color: '#FFFFFF', fontWeight: 700 }}
                    >
                        About Me
                    </Typography>
                </div>
                <div className="page-about-info-container">
                    <Typography variant="body1" sx={{ color: '#808080', fontWeight: 500 }}>
                        I am a dedicated full-stack developer based in Pune, India. 
                        My professional journey is defined by a passion for architecting robust systems and solving complex technical challenges that 
                        drive real-world impact. 
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#808080', fontWeight: 500 }}>
                        I thrive on exploring innovative solutions and staying at the forefront of the ever-evolving tech landscape. 
                        Whether it's optimizing back-end performance or crafting seamless user experiences, I bring a meticulous approach to every line of code.
                    </Typography>
                </div>
                <div className="page-about-info-action">
                    <AppButton
                      variant={'solid'}
                      sx={{ height: 50, color: '#003919' }}
                    >
                        Get in touch &nbsp;&nbsp;
                        <EmailOutlinedIcon />
                    </AppButton>
                    <AppButton
                      variant={'outline'}
                      sx={{ height: 50 }}
                    >
                        Download Resume &nbsp;&nbsp;
                        <FileDownloadOutlinedIcon />
                    </AppButton>
                </div>
            </div>
            <div className="page-about-decription">
                <Typography variant="h2" sx={{ color: '#FFFFFF', fontWeight: 700, }}>
                    Helping brands to stand out.
                </Typography>
                <Typography variant="body1" sx={{ color: '#808080', fontWeight: 500 }}>
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world. 
                    I enjoy crafting intuitive, high-performance digital experiences that are not only visually engaging but also scalable, accessible, and built with purpose.
                </Typography>
                <Typography variant="body1" sx={{ color: '#808080', fontWeight: 500 }}>
                    I believe exceptional products are built where thoughtful design meets clean engineering.
                    {/* I strive to create interfaces that are fast, intuitive, and visually refined—where every animation, component, and interaction serves a purpose.  */}
                    By blending creative thinking with technical expertise, I aim to build experiences that leave a lasting impression.
                </Typography>
            </div>
        </StyledAboutWrapper>
    </StyledPageWrapper>
  )
}
// endregion
export default About;