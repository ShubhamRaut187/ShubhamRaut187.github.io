import React, { useState } from 'react'
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import { Typography, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import TextField from '@mui/material/TextField';
import AppButton from '../../components/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const StyledContentWrapper = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
    margin: 20px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
        flex-direction: column;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

const StyledConnectSocialWrapper = styled.div`
    /* height: 300px; */
    width: 45%;
    /* border: 1px solid white; */
    border-radius: 8px;
    background-color: #1E1F27;
    padding: 30px 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
    }
`;

const StyledConnectFromWrapper = styled.div`
    width: 45%;
    height: 290px;
    border-radius: 20px;
    /* border: 1px solid red; */
    padding: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        padding: 30px 0px;
        /* border: 1px solid red; */
    }
    & > div {
        width: 48%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        /* border: 1px solid red; */
        height: 100% !important;
        gap: 24px;
        @media screen and (min-width: 320px) and (max-width: 767px) {
        gap: 10px;
    }
    }
`;

const StyledSocialIconsContainer = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 20px auto;
`; 

const StyledTextFeild = styled(TextField)`
    width: 100% !important;
    background: #1E1F27 !important;
    border-radius: 8px !important;
    color: #FFFFFF !important;

  & label {
    color: #FFFFFF !important; /* Label color */
  }

  & .MuiFilledInput-root {
    color: #FFFFFF; /* Input text color */

    &.Mui-focused {
      /* border-bottom: 2px solid #E51C4A !important;  */
    }
  }


  & .MuiFilledInput-underline:before {
    border-bottom: none !important; 
  }

  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid #4ADE80 !important; 
    border-radius: 10px !important;
  }
`;

const StyledTextFeildMessage = styled(TextField)`
    width: 100% !important;
    background: #1E1F27 !important;
    border-radius: 8px !important;
    color: #FFFFFF !important;
    height: 100% !important;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        height: 87% !important;
    }

  & label {
    color: #FFFFFF !important; 
  }

  & .MuiFilledInput-root {
    color: #FFFFFF; /* Input text color */
    height: 100% !important;
    &.Mui-focused {
      /* border-bottom: 2px solid #E51C4A !important;  */
    }
  }


  & .MuiFilledInput-underline:before {
    border-bottom: none !important; 
  }

  & .MuiFilledInput-underline:after {
    border-bottom: 2px solid #4ADE80 !important; 
    border-radius: 10px !important;
  }

`;

const Contact: React.FC = () => {
  // State to store form data
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<object>({});

  const handleSubmit: (event: React.MouseEvent<HTMLButtonElement>)  => void = (event) => {
    event.preventDefault();
    console.log(name, email, purpose, message, formErrors)
    setFormErrors({});
  }

  return (
    <PageWrapper>
       <Typography variant='h2' component='div' sx={{ fontWeight: 700 }}>
            Contact me.
        </Typography>
        <StyledContentWrapper>
            <StyledConnectSocialWrapper>
                <Typography variant='body1' component='div' sx={{ color: '#4ADE80', fontWeight: 900}}>
                    Let's Connect...
                </Typography>
                <Typography variant='body2' component='div' sx={{ color: '#FFFFFF', marginTop: '14px'}}>
                    I’m passionate about exploring new opportunities, collaborating on innovative projects, and connecting with professionals 
                    who share a vision for growth. Whether you’re looking to team up on a project, discuss ideas, or explore new ventures, 
                    I’m excited to hear from you. Feel free to reach out, and let’s create something impactful together!
                </Typography>
                <Typography variant='body2' component='div' sx={{ color: '#808080', marginTop: '20px', fontWeight: 900 }}>
                    Write me at: raut.shubham4554@gmail.com
                </Typography>
                <Typography variant='body2' component='div' sx={{ color: '#808080', fontWeight: 900}}>
                    Mobile: +91 &nbsp;7499265181
                </Typography>
                <StyledSocialIconsContainer>
                    <LinkedInIcon sx={{ color: '#4ADE80', width: '20px', height: '20px', cursor: 'pointer'}}/>
                    <GitHubIcon sx={{ color: '#4ADE80', width: '15px', height: '15px', cursor: 'pointer'}}/>
                    <EmailIcon sx={{ color: '#4ADE80', width: '20px', height: '20px', cursor: 'pointer'}}/>
                    <InstagramIcon sx={{ color: '#4ADE80', width: '20px', height: '20px', cursor: 'pointer'}}/>
                    <CallIcon sx={{ color: '#4ADE80', width: '20px', height: '20px', cursor: 'pointer'}}/>
                </StyledSocialIconsContainer>
            </StyledConnectSocialWrapper>
            <StyledConnectFromWrapper>
                <div>
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Name"
                      variant="filled"
                      onChange={ (e)=>{
                        setName(e.target.value);
                      } }
                    />
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Email Address"
                      variant="filled"
                      onChange={ (e)=>{
                        setEmail(e.target.value);

                      } }
                    />
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Purpose"
                      variant="filled"
                      onChange={ (e)=>{
                        setPurpose(e.target.value);
                      } }
                    />
                    <AppButton
						variant='solid'
						sx={{ height: 50, color: '#003919', width: '100%' }}
						onClick={handleSubmit}
					>
						Send Mail&nbsp;&nbsp;
						<EmailOutlinedIcon />
					</AppButton>
                </div>
                <div>
                    <StyledTextFeildMessage
                      required
                      id="filled-required"
                      label="Your Message"
                      variant="filled"
                      multiline
                      rows={10}
                      onChange={ (e)=>{
                        setMessage(e.target.value);
                      } }
                    />
                </div>
            </StyledConnectFromWrapper>
        </StyledContentWrapper>
    </PageWrapper>
  )
}

export default Contact;