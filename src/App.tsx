import styled from 'styled-components';
import './App.css'
// import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import AnimatedCursor from "react-animated-cursor";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Contact from './pages/Contact'; 
import Projects from './pages/Projects';
import Footer from './components/Footer';

const StyledSection = styled.section`
	scroll-margin-top: 120px;
`;

const App: React.FC = () => {
	return (
		<div>
			<AnimatedCursor
				color="255, 255, 255"
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={1.7}
				outerAlpha={0.1}
				outerStyle={{
					mixBlendMode: 'exclusion'
				}}
				showSystemCursor={false}
			/>
			<Header/>
			<StyledSection id='home'>
				<Home/>
			</StyledSection>
			<StyledSection id='about'>
				<About/>
			</StyledSection>
			<StyledSection id='skills'>
				<Skills />
			</StyledSection>
			<StyledSection id='resume'>
				<Resume />
			</StyledSection>
			<StyledSection id='projects'>
				<Projects />
			</StyledSection>
			<StyledSection id='contact'>
				<Contact/>
			</StyledSection>
			<Footer/>
		</div>
  )
}

export default App;