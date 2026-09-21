import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard';

const StyledContentWrapper = styled.div`
    margin: 20px auto;
`;

const StyledCompoanyProjectsContainer = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

const StyledCompanyProjectCard = styled.div`
    background-color: #1E1F27;
    border-radius: 8px;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    & > .projects-company-project-card-description {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 12px;
    }
`;

const Projects: React.FC = () => {
  return (
    <PageWrapper>
        <Typography variant='h3' component='div' sx={{ color: '#FFFFFF', fontWeight: 600}}>
            Projects
        </Typography>
        {/* <StyledContentWrapper>
            <ProjectCard />
        </StyledContentWrapper> */}
        <StyledCompoanyProjectsContainer>
            <StyledCompanyProjectCard>
                <div>
                    <Typography variant='h6' sx={{ color: '#FFFFFF', fontWeight: 900 }}>AdZiggy</Typography>
                    <Typography variant="body2" sx={{ color: '#4ADE80', fontWeight: 900, }}>Associated with Knorex.</Typography>
                </div>
                <div className='projects-company-project-card-description'>
                    <Typography variant="body2" sx={{ color: '#FFFFFF', textAlign: 'justify' }}>
                        AdZiggy is a lightweight, universal AdTech platform with domain-specific white-label capabilities, 
                        enabling businesses to create, manage, and optimize digital advertising campaigns across multiple marketing channels. 
                        The platform integrates major advertising ecosystems, 
                        including Meta (Social), Google (Search), LinkedIn, and Programmatic Display, providing a unified interface for campaign management, 
                        reporting, creative management, audience targeting, and performance tracking. The frontend is built using React 15.1, React Router v3.2.1, 
                        Redux, and Redux Saga.
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#FFFFFF', textAlign: 'justify', fontWeight: 600 }}>
                        React 15.1 | &nbsp;Java Spring
                    </Typography>
                </div>
            </StyledCompanyProjectCard>
            
        </StyledCompoanyProjectsContainer>
    </PageWrapper>
  )
}

export default Projects;