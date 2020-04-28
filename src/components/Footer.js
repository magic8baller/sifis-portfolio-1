import {Link} from "gatsby";
import React from "react";
import {mainLinks} from "../constants/links";
import socialIcons from "../constants/social-icons";
import styles from "../css/footer.module.css";

const Footer = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{mainLinks.map((item, index) => {
					return (
						<Link key={index} to={item.path}>
							<span className={styles.text}>{item.text}</span>
						</Link>
					)
				})}
			</div>
			<div className={styles.icons}>
				{socialIcons.map((item, index) => {
					return (
						<a
							aria-label="Social Media Link"
							key={index}
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.icon}
						</a>
					)
				})}
			</div>
			<div className={styles.copyright}>
				copyright &copy; Iosif Kalogerakis {new Date().getFullYear()} all rights reserved
				<br />
				<small style={{fontSize: '0.6rem'}}><em>Made with <span aria-label='emoji heart' role="img">❤️</span> by <a href='mailto:lturis@gmail.com' target='_blank' rel='noopener noreferrer' className={styles.leslieLink}>Leslie Turis</a></em></small>
			</div>
		</footer>
	)
}

export default Footer
