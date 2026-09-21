// #region Imports
import React from 'react'
import styled from 'styled-components';
import { Typography } from '@mui/material';

import PageWrapper from '../../components/PageWrapper';
// endregion 

// #region Styled Components
const StyledSkillcardContainer = styled.div`
	display: grid;
	gap: 10px; 
	grid-template-columns: repeat(5, 1fr); 
	margin: 20px auto;

	& > img {
		border-radius: 8px; 
		height: auto;
		max-height: 120px;
		object-fit: cover; 
		width: 100%;
	}

	& > img:nth-child(1) {
		grid-column: span 1; 
		grid-row: span 1; 
	}

	& > img:nth-child(2) {
		grid-column: span 1; 
		grid-row: span 1;
	}

	& > img:nth-child(3) {
		grid-column: span 3;
		grid-row: span 1;
	}

	& > img:nth-child(4) {
		grid-column: span 3;
		grid-row: span 1;
	}

	& > img:nth-child(5) {
		grid-column: span 2;
		grid-row: span 1;
	}

	& > img:nth-child(6) {
		grid-column: span 3;
		grid-row: span 2;
	}

	& > img:nth-child(7) {
		grid-column: span 2;
		grid-row: span 1;
	}

	& > img:nth-child(8) {
		grid-column: span 3;
		grid-row: span 1;
	}

	& > img:nth-child(9) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(10) {
		grid-column: span 1;
		grid-row: span 1;
	}
	
	& > img:nth-child(11) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(12) {
		grid-column: span 2;
		grid-row: span 1;
	}

	& > img:nth-child(13) {
		grid-column: span 2;
		grid-row: span 1;
	}

	& > img:nth-child(14) {
		grid-column: span 2;
		grid-row: span 2;
	}

	& > img:nth-child(15) {
		grid-column: span 3;
		grid-row: span 2;
	}

	& > img:nth-child(16) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(17) {
		grid-column: span 2;
		grid-row: span 1;
	}

	& > img:nth-child(18) {
		grid-column: span 2;
		grid-row: span 1;
	}

	& > img:nth-child(19) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(20) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(21) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(22) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(23) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(24) {
		grid-column: span 1;
		grid-row: span 1;
	}

	& > img:nth-child(25) {
		grid-column: span 1;
		grid-row: span 1;
	}

	/* Responsive Styles */
	@media screen and (min-width: 768px) and (max-width: 1024px) {
		gap: 8px; 
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 320px) and (max-width: 767px) {
		gap: 5px;
		grid-template-columns: repeat(2, 1fr);
		
		& > img {
			max-height: 80px;
		}
	}
`;
// #endregion

// #region Component
const Skills: React.FC = () => {
  return (
    <PageWrapper>
        <Typography variant='h2' component='div' sx={{ fontWeight: 700 }}>
            Technical Proficiency.
        </Typography>
        <div style={{ maxWidth: '70%', marginTop: '16px' }}>
            <Typography variant='body1' sx={{ color: '#808080', fontWeight: 500 }}>
            	Explore my comprehensive technical stack, built through hands-on experience across the entire software engineering lifecycle. From crafting intuitive user interfaces and robust backend services to managing cloud infrastructure, automation, databases, and AI-powered solutions, these are the technologies I use to build modern, scalable applications.
            </Typography>
        </div>
        <StyledSkillcardContainer>
            <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" height="40" alt="html5 logo"  />
            <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" height="40" alt="css3 logo"  />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" height="40" alt="javascript logo"  />
            <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" height="40" alt="react logo"  />
            <img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge" height="40" alt="redux logo"  />
            <img src="https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge" height="40" alt="nodejs logo"  />
            <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=for-the-badge" height="40" alt="express logo"  />
            <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge" height="40" alt="mongodb logo"  />
            <img src="https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge" height="40" alt="mysql logo"  />
            <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge" height="40" alt="postgresql logo"  />
            <img src="https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white&style=for-the-badge" height="40" alt="redis logo"  />
            <img src="https://img.shields.io/badge/Confluence-172B4D?logo=confluence&logoColor=white&style=for-the-badge" height="40" alt="confluence logo"  />
            <img src="https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=white&style=for-the-badge" height="40" alt="jira logo"  />
            <img src="https://img.shields.io/badge/Bitbucket-0052CC?logo=bitbucket&logoColor=white&style=for-the-badge" height="40" alt="bitbucket logo"  />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" height="40" alt="typescript logo"  />
            <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge" height="40" alt="firebase logo"  />
            <img src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=black&style=for-the-badge" height="40" alt="postman logo"  />
            <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge" height="40" alt="vscode logo"  />
            <img src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge" height="40" alt="github logo"  />
            <img src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=black&style=for-the-badge" height="40" alt="netlify logo"  />
            <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge" height="40" alt="vercel logo"  />
            <img src="https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white&style=for-the-badge" height="40" alt="heroku logo"  />
            <img src="https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white&style=for-the-badge" height="40" alt="materialui logo"  />
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" height="40" alt="bootstrap logo"  />
            {/* <img src="https://skillicons.dev/icons?i=java" height="40" alt="java logo"  /> */}
        </StyledSkillcardContainer>
    </PageWrapper>
  )
}

export default Skills;
// #endregion