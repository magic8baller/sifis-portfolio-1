import React, {useState} from 'react'
import {FaAngleDown} from 'react-icons/fa'
import styles from '../../css/details.module.css'

const ArtInfo = ({info}) => {

	const [showInfo, setInfo] = useState(false)
	const toggleInfo = () => {
		setInfo(showInfo => !showInfo)
	}
	let isImageDescribed = info ? info : "Working with a new medium"

	return (
		<article className={styles.details}>
			<h4>
				Details
				<button aria-label='Arrow Icon' style={{textAlign: "center"}} className={styles.btn} onClick={toggleInfo}>
					<FaAngleDown />
				</button>
			</h4>
			{showInfo && <p>{isImageDescribed}</p>}
		</article>
	)
}

export default ArtInfo