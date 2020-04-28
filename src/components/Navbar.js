import {Link} from "gatsby";
import React, {useState} from "react";
import {FaAlignRight} from "react-icons/fa";
import {mainLinks} from "../constants/links";
// import socialIcons from "../constants/social-icons"
import styles from "../css/navbar.module.css";
import logo from "../images/logo_transparent2.png";

const Navbar = () => {
	const [isOpen, setNav] = useState()
	const toggleNav = () => {
		setNav(isOpen => !isOpen)
	}

	return (
		<nav className={styles.navbar}>
			<div className={styles.navCenter}>
				<div className={styles.navHeader}>
					<Link to='/'><img className={styles.img} src={logo} aria-label='artist logo index link' alt="logo" /></Link>
					<button type="button" aria-label="dropdown menu" className={styles.logoBtn} onClick={toggleNav}>
						<FaAlignRight className={styles.logoIcon} />
					</button>
					<div className={styles.clearFix}></div>
				</div>
				<ul
					className={
						isOpen
							? `${styles.navLinks} ${styles.showNav}`
							: `${styles.navLinks}`
					}
				>
					{mainLinks.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.path} className={styles.linkText}>{item.text}</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
