import {Link} from 'gatsby'
import React from "react"
import Banner from '../components/Banner'
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
export default function error () {
	return <Layout><header className={styles.error}><Banner title='oops youve hit a dead end'><Link to='/' className='btn-white'>Return to Homepage </Link></Banner></header></Layout>
}
