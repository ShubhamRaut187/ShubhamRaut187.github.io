import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import styled from 'styled-components';
import { Chip, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import FlagIcon from '@mui/icons-material/Flag';
import LayersIcon from '@mui/icons-material/Layers';
import PersonIcon from '@mui/icons-material/Person';

import { PROJECTS } from './constants'

const StyledCompoanyProjectsContainer = styled.div`
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    @media screen and (min-width:768px) and (max-width:1024px){
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledCompanyProjectCard = styled.div`
    background-color: #1E1F27;
    border-radius: 8px;
    padding: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;

    & > .project-card-primary-details {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 24px;
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    list-style-type: disc;
    margin: 0px;
    padding: 12px;
    width: '100%';

    & > li::marker {
        color: #4ade80;
    }
`;

const Projects: React.FC = () => {
  return (
    <PageWrapper>
        <Typography variant='h3' component='div' sx={{ color: '#FFFFFF', fontWeight: 600}}>
            Projects
        </Typography>
        <StyledCompoanyProjectsContainer>
            {
                PROJECTS && Array.isArray(PROJECTS) &&
                PROJECTS.map((project, index) => {
                    return (
                        <StyledCompanyProjectCard key={index}>
                            <div className='project-card-primary-details'>
                                <div className='project-card-title'>
                                    <Typography variant='h6' sx={{ color: '#FFFFFF', fontWeight: 900 }}>{project.name}</Typography>
                                    <Typography variant="body2" sx={{ color: '#4ADE80', fontWeight: 900 }}>
                                        {project.association}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#FFFFFF', textAlign: 'justify', mt: '18px', display: 'block' }}>
                                        {project.summary}
                                    </Typography>
                                </div>
                                <hr style={{ width: '100%', border: '0.6px solid #808080' }}/>
                                <div className='project-card-description'>
                                    <Typography variant='body2' sx={{ fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '4px' }}>
                                        <DescriptionIcon />
                                        Description.
                                    </Typography>
                                    <Typography variant='caption'>
                                        {project.description}
                                    </Typography>
                                </div>
                                <hr style={{ width: '100%', border: '0.6px solid #808080' }}/>
                                <div style={{ width: '100%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '4px' }}>
                                        <FlagIcon />
                                        Key Features.
                                    </Typography>
                                    <StyledUl>
                                        {
                                            project.features.map((feature) => {{
                                                return (
                                                    <li>
                                                        <Typography variant='caption'>
                                                            {feature}
                                                        </Typography>
                                                    </li>
                                                );
                                            }})
                                        }
                                    </StyledUl>
                                </div>
                                <hr style={{ width: '100%', border: '0.6px solid #808080' }}/>
                                <div style={{ width: '100%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '4px' }}>
                                        <LayersIcon />
                                        Tech Stack.
                                    </Typography>
                                    <Typography variant='caption' sx={{ color: '#808080', fontWeight: 900 }}>Front End</Typography>
                                    <div>
                                        {
                                            project.techStack.frontEnd.map((stack) => {
                                                return (
                                                    <Chip variant='outlined' label={stack}/>
                                                );
                                            })
                                        }
                                    </div>
                                    <Typography variant='caption' sx={{ color: '#808080', fontWeight: 900 }}>Back End</Typography>
                                    <div>
                                        {
                                            project.techStack.backEnd.map((stack) => {
                                                return (
                                                    <Chip variant='outlined' label={stack}/>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                <hr style={{ width: '100%', border: '0.6px solid #808080' }}/>
                                <div style={{ width: '100%' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '4px' }}>
                                        <PersonIcon />
                                        My areas of responsibility.
                                    </Typography>
                                    <StyledUl>
                                        {
                                            project.role.map((item) => {
                                                return (
                                                    <li>
                                                        <Typography variant='caption'>
                                                           {item}
                                                        </Typography>
                                                    </li>
                                                );
                                            })
                                        }
                                    </StyledUl>
                                </div>
                            </div>
                        </StyledCompanyProjectCard>
                    );
                })
            }
        </StyledCompoanyProjectsContainer>
    </PageWrapper>
  )
}

export default Projects;