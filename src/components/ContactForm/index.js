import React from 'react';
import styles from '../../css/contact.module.css';
import Title from '../StyledTitle';
const Contact = () => {
	return (
		<section className={styles.contact}>
			<Title title='contact' subtitle='joseph' />
			<div className={styles.center}>

				<form action="https://formspree.io/josagr2009@hotmail.com" method="POST" className={styles.form}>
					<div>
						<input type="text" name="_gotcha" style={{display: 'none'}} />
						<label htmlFor='name'>Name</label>
						<input type="text" name='name' id='name' className={styles.formControl} placeholder='john smith' />
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<input type="email" name='email' id='email' className={styles.formControl} placeholder='john@email.com' />
					</div>
					<div>
						<label htmlFor='message'>Message</label>
						<textarea name='message' id='message' rows='10' className={styles.formControl} placeholder='hello there!' />
					</div>
					<div>
						<input type="submit" value='submit here' className={styles.submit} />
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact
