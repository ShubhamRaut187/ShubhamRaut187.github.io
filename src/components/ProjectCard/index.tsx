import React from 'react'
import styled from 'styled-components';
import { Link, Typography } from '@mui/material';
import ImageContainer from '../ImageContainer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const StyledProjectCard = styled.div`
    width: 85% !important;
    /* max-width: 100% !important; */
    margin: auto;
    height: 500px;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    flex-direction: row-reverse;
`;

const StyledImagesWrapper = styled.div`
    width: 60%;
    height: 100% !important;
    /* border: 1px solid white; */
`;

const StyledInfoWrapper = styled.div`
    width: 35%;
    height: 100% !important;
    /* border: 1px solid green; */
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 20px;

    & > div.projectcard-tech-stack {
        /* border: 1px solid yellow; */
        width: 100%;
        /* display: flex;
        align-items: center;
        justify-content: space-evenly; */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
    
    & > div.projectcard-source-icons {
        width: 20%;
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const ProjectCard: React.FC = () => {
  return (
    <StyledProjectCard>
        <StyledImagesWrapper>
            <ImageContainer width='100%' height='100%' borderradius='10px' source='https://shubhamraut187.github.io/Shopclues_Home.jpg' imageName='home'/>
        </StyledImagesWrapper>
        <StyledInfoWrapper>
            <Typography variant='h4' sx={{ color: '#E51C4A', fontWeight: 600 }}>
                Shopclues Clone
            </Typography>
            <Typography variant='body1' sx={{ color: '#808080' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem sequi delectus architecto, officia repellat optio beatae necessitatibus quibusdam sint ab? Beatae officia iure qui! Molestiae harum nisi sunt ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum voluptatum harum a architecto quisquam, sapiente, ea odio corporis in excepturi expedita explicabo sed tenetur corrupti. Temporibus, ullam! Dignissimos, pariatur.
                lo
            </Typography>
            <div className='projectcard-tech-stack'>
                <ImageContainer width='115px' height='40px' borderradius='5px' source='https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge' imageName='html5'/>
                <ImageContainer width='115px' height='40px' borderradius='5px' source='https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge' imageName='html5'/>
                <ImageContainer width='115px' height='40px' borderradius='5px' source='https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge' imageName='html5'/>
                <ImageContainer width='115px' height='40px' borderradius='5px' source='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge' imageName='html5'/>
                <ImageContainer width='115px' height='40px' borderradius='5px' source='https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge' imageName='html5'/>
                <ImageContainer width='115px' height='40px' borderradius='5px' source='https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge' imageName='html5'/>
            </div>
            <div className='projectcard-source-icons'> 
                <LinkIcon sx={{ width: '40px', height: '40px', transform: 'rotate(40deg)', color: '#FFFFFF'}}/>
                <GitHubIcon sx={{ width: '35px', height: '35px', color: '#FFFFFF'}}/>
            </div>
        </StyledInfoWrapper>
    </StyledProjectCard>
  )
}

export default ProjectCard;