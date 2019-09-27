import React from 'react'
import styled from 'styled-components'
const Title = ({title, subtitle}) => {
	return (
		<TitleWrapper>
			<span>
				<h1 className="title">{title}</h1>
				<h3 className="subtitle">{subtitle}</h3></span>
		</TitleWrapper>
	)
}
const TitleWrapper = styled.div`
text-transform: uppercase;
font-size:2.3rem;
padding: 0.5rem;
margin-bottom:1rem;
h1 {text-align: center; letter-spacing:7px; color: var(--mainWhite); margin-bottom: 0.5rem; font-size: 3rem;}
h3 {text-align: center; text-transform: capitalize; margin-top: 1rem; }
.title {color: var(--primaryColor);}
span {display: block;

}
`
export default Title;
