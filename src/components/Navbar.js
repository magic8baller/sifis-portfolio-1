import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, {useState} from "react";
import {FaAlignRight} from "react-icons/fa";
import {mainLinks} from "../constants/links";
// import socialIcons from "../constants/social-icons"
import styles from "../css/navbar.module.css";
import logo from "../images/logo2.png";

const Navbar = () => {
	const [isOpen, setNav] = useState()
	const toggleNav = () => {
		setNav(isOpen => !isOpen)
	}
	// const mainLinks = links.slice(0, 4)
	// console.log(mainLinks)
	return (
		<nav className={styles.navbar}>
			<div className={styles.navCenter}>
				<div className={styles.navHeader}>
					<AniLink swipe to='/'><img src={logo} style={{padding: '1rem 0', height: '20vh', width: '20vw'}} alt="logo" /></AniLink>
					<button type="button" className={styles.logoBtn} onClick={toggleNav}>
						<FaAlignRight className={styles.logoIcon} />
					</button>
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
								<AniLink swipe to={item.path} style={{fontSize: '1rem'}}>{item.text}</AniLink>
							</li>
						)
					})}
				</ul>
				{/* <div className={styles.navSocialLinks}>
					{socialIcons.map((item, index) => {
						return (
							<a
								key={index}
								href={item.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.icon}
							</a>
						)
					})}
				</div> */}
			</div>
		</nav>
	)
}

export default Navbar

// import React, { useState } from "react"
// import { Link } from "gatsby"
// import styles from "../css/navbar.module.css"
// import { FaAlignRight } from "react-icons/fa"
// import links from "../constants/links"
// import socialIcons from "../constants/social-icons"
// import logo from "../images/logo.svg"
// const Navbar = () => {
//   const [isOpen, setNav] = useState()
//   const toggleNav = () => {
//     setNav(isOpen => !isOpen)
//   }

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navCenter}>
//         <div className={styles.navHeader}>
//           <img src={logo} alt="backroads logo" />
//           <button type="button" className={styles.logoBtn} onClick={toggleNav}>
//             <FaAlignRight className={styles.logoIcon} />
//           </button>
//         </div>
//         <ul
//           className={
//             isOpen
//               ? `${styles.navLinks} ${styles.showNav}`
//               : `${styles.navLinks}`
//           }
//         >
//           {links.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link to={item.path}>{item.text}</Link>
//               </li>
//             )
//           })}
//         </ul>
//         <div className={styles.navSocialLinks}>
//           {socialIcons.map((item, index) => {
//             return (
//               <a
//                 key={index}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {item.icon}
//               </a>
//             )
//           })}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
