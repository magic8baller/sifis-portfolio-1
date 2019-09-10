import React from "react"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"
import {FaGithub, FaReact} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
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
      </div>
      <div className={styles.copyright}>
				copyright &copy; Joseph Kalogerakis {new Date().getFullYear()} all rights reserved
				<br />
				<small>Made with <span role="img">❤️</span> + <a style={{color: 'lightblue', fontSize: '0.9rem'}} href='https://reactjs.org'> <FaReact /> </a> .by Leslie Turis<a style={{color: 'lightblue', fontSize: '0.9rem'}} href='https://github.com/magic8baller'> <FaGithub /></a></small>
      </div>
    </footer>
  )
}

export default Footer
