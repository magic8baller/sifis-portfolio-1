import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import {FaGithub, FaReact} from 'react-icons/fa';
import {mainLinks} from "../constants/links";
import socialIcons from "../constants/social-icons";
import styles from "../css/footer.module.css";

const Footer = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.links}>
				{mainLinks.map((item, index) => {
					return (
						<AniLink swipe key={index} to={item.path}>
							<span className={styles.text}>{item.text}</span>
						</AniLink>
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
				<small style={{fontSize: '0.6rem'}}><em>Made with <span aria-label='emoji heart' role="img">❤️</span><a aria-label="ReactJS Link" style={{color: 'lightblue', fontSize: '0.9rem'}} href='https://reactjs.org'><FaReact /></a>  by Leslie Turis  <a aria-label="Github Link" style={{color: 'lightblue', fontSize: '0.9rem'}} href='https://github.com/magic8baller'><FaGithub /></a></em></small>
			</div>
		</footer>
	)
}

export default Footer
