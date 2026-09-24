import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import PageWrapper from '../../components/PageWrapper';
import { Typography } from '@mui/material';
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
	/* box-sizing: border-box; */
    margin: 20px auto;
    @media screen and (min-width:768px) and (max-width:1024px){
        flex-direction: column;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

const StyledConnectSocialWrapper = styled.div`
    width: 45%;
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
    /* height: 400px; */
    border-radius: 20px;
    /* border: 1px solid red; */
	/* box-sizing: border-box; */
    padding: 30px 30px;

	& > form {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		& > div {
			width: 48%;
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			height: 100% !important;
			gap: 24px;
			@media screen and (min-width: 320px) and (max-width: 767px) {
				gap: 10px;
			}
		}
	}
    @media screen and (min-width:768px) and (max-width:1024px){
        width: 100%;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
        padding: 30px 0px;
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
	const [name, setName] = useState<string | null>('');
	const [email, setEmail] = useState<string | null>('');
	const [purpose, setPurpose] = useState<string | null>('');
	const [message, setMessage] = useState<string | null>('');

	const form = useRef<HTMLFormElement>(null);

	const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if(name === "" || email === "" || message === "" || purpose === ""){
				alert("Fill all fields");
				return;
		}else{
			if (!form.current) return;
			emailjs.sendForm('service_ikolial', 'template_3g3n18n', form.current, 'CjdAEuzuPVuBh7-Ed')
			.then(() => {
				setName('');
				setEmail('');
				setPurpose('');
				setMessage('');
				alert("Message has been sent successfully.");
			}, () => {
			});
		}
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
                <form ref={form} onSubmit={handleSubmit} className='appointment_form'>
				<div>
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Name"
                      variant="filled"
					  name="name"
                      onChange={(e)=>{
                        setName(e.target.value);
                      } }
					  value={name}
                    />
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Email Address"
                      variant="filled"
					  name="email"
                      onChange={ (e)=>{
                        setEmail(e.target.value);

                      } }
					  value={email}
                    />
                    <StyledTextFeild
                      required
                      id="filled-required"
                      label="Purpose"
                      variant="filled"
					  name="purpose"
                      onChange={ (e)=>{
                        setPurpose(e.target.value);
                      } }
					  value={purpose}
                    />
                    <AppButton
						variant='solid'
						sx={{ height: 50, color: '#003919', width: '100%' }}
						type='submit'
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
					  name="message"
                      multiline
                      rows={11}
                      onChange={ (e)=>{
                        setMessage(e.target.value);
                      } }
					  value={message}
                    />
                </div>
				</form>
            </StyledConnectFromWrapper>
        </StyledContentWrapper>
    </PageWrapper>
  )
}

export default Contact;