import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';

const StyledHero = ({img, className, children, home}) => {
	return (
		<BackgroundImage className={className} fluid={img} home={home}>
			{children}
		</BackgroundImage>
	)
}

export default styled(StyledHero)`
 min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
background: ${props => props.home ? 'linear-gradient(#6a593be0, rgba(0, 0, 0, 0.7))' : 'none'};
background-position: center;
background-size: cover;
opacity: 1 !important;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5rem;
/* @media screen and (max-width:400px){
	margin-top: 3rem;
	} */
@media screen and (max-width: 767px){
	margin-top: 3rem;
	}
`
