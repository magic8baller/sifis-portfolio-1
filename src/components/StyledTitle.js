import React from 'react'
import styled from 'styled-components'
import styles from '../css/title.module.css'
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
h1 {text-align: center; letter-spacing:7px; color: var(--mainWhite);}
h3 {text-align: center; text-transform: capitalize;}
.title {color: var(--primaryColor);}
span {display: block;

}
`
export default Title;
