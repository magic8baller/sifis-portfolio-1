import React, {useState} from 'react'

const AboutDetails = () => {

	const [showInfo, setInfo] = useState(false)

	const toggleInfo = () => {
		setInfo(showInfo => !showInfo)
	}

	return (
		<article>

			<button type='button' aria-label='Read More' className='btn-primary' onClick={toggleInfo}>read more</button>

			{showInfo && (<p style={{paddingTop: "2rem"}}>
			<p>Describing an artist is a difficult task and I have to admit, that I would prefer if you, dear reader, would just look at the artwork itself and let <em>it</em> do the describing, not <em>me.</em></p>
					<p>
						Okay I get it, you are still here for the Information. But before I tell you the little that I know about the subject of your interest I have to confess I am not an author free of all sorts of bias, rather quite the opposite and perhaps a liar too.
						I once heard Joseph say "nothing is so common than the wish to be remarkable", err wait, no, Shakespeare said that; Joseph said something like, "when I make art, it comes from a dark place deep inside me and I can find no words to describe it".
</p>
				<p>
					I once found myself at a <em>συμπόσιον</em> with our fellow artist and some friends, debating the value of naming his artworks, because this was a task Joseph had neglected so far. After a good amount of alcohol had entered into- and countless words had came out of- the mouths of the participants, Joseph remained unconvinced by the orators rhethoric, refused to decide on the matter and, thus the art still remains untitled.
					When I asked one of his friends for the reason of his undecidefulness on the matter, he told me:
<br />
					<br />
					"I have known Joseph for almost half my life and he was painting ever since. But what his drive to action and his meaning to his art was, remained a mystery to me, because you need to know, being at constant battle with his willingness to be satisfied with what he had made already, he was always very parsimonious with showing his creations to the world. Pictures, which me and others admired greatly, were dismissed by him as mere 'exercises' and sometimes even carelessly destroyed by their creator, because of his insistence on only wanting to show the world something that is truly finished. This stubborn, reckless way of thinking and creating, is, I think, from where his art is emanating."
</p>
				<p>
					I'm not sure how much of what he said was actually true. I had the feeling his main objective was to extol the virtues of his friend and impress me with his educated choice of words, rather than giving real information <em>about</em> our artist, but after I heard this, my interest in Joseph's art was at once awakened and never ceased to flourish.
</p>
			</p>)}
		</article>
	)
}

export default AboutDetails
