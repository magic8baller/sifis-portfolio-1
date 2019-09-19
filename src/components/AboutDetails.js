import React, {useState} from 'react'

const AboutDetails = () => {

	const [showInfo, setInfo] = useState(false)

	const toggleInfo = () => {
		setInfo(showInfo => !showInfo)
	}

	const dummyMoreInfo = "You're telling the enemy exactly what you're going to do. No wonder you've been fighting Lorem Ipsum your entire adult life. The best taco bowls are made in Trump Tower Grill. I love Hispanics! The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive."
	return (
		<article>

			<button type='button' aria-label='Read More' className='btn-primary' onClick={toggleInfo}>read more</button>

			{showInfo && (<p style={{paddingTop: "2rem"}}>{dummyMoreInfo}</p>)}
		</article>
	)
}

export default AboutDetails
