import React from 'react'
import PageWrapper from '../../components/PageWrapper';
import AppButton from '../../components/Button';
import { Typography, Button } from '@mui/material';
import styled from 'styled-components';
import Timeline from '../../components/TimeLine';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { EDUCATION_INFORMATION, WORK_INFORMATION} from './constants';

const StyledResumeContentWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
      flex-direction: column;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

const StyledWorkContentWrapper = styled.div`
    width: 48%;
    border-radius: 20px;
    height: 640px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        height: auto;
    }
`;


const Resume: React.FC = () => {
  return (
    <PageWrapper>
        <Typography variant='h2' component='div' sx={{ fontWeight: 700 }}>
            Career & Learnings.
        </Typography>
        <StyledResumeContentWrapper>
            <StyledWorkContentWrapper>
                <Typography variant='h5' sx={{ color: '#4ADE80', fontWeight: 800 }} >
                    Professional Experience.
                </Typography>
                <Timeline data={WORK_INFORMATION}/>
                <AppButton
                    variant='solid'
                    sx={{ height: 50, color: '#003919' }}
                >
                    Download Resume&nbsp;&nbsp;
                    <FileDownloadOutlinedIcon />
                </AppButton>
            </StyledWorkContentWrapper>
            <StyledWorkContentWrapper>
                <Typography variant='h5' sx={{ color: '#4ADE80', fontWeight: 800 }} >
                    Education.
                </Typography>
                <Timeline data={EDUCATION_INFORMATION}/>
            </StyledWorkContentWrapper>
        </StyledResumeContentWrapper>
    </PageWrapper>
  )
}

export default Resume;