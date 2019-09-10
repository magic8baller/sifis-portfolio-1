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
padding-top: 3rem;
margin-bottom:2rem;
h1 {text-align: center; letter-spacing:7px; color: var(--mainWhite);}
h3 {text-align: center; text-transform: capitalize;}
.title {color: var(--primaryColor);}
span {display: block;}
/* @media (min-width: 576px){ */
/* span {
	display: inline-block;
	margin: 0 0.35rem;
} */

}
`
export default Title;