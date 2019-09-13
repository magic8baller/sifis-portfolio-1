import React, {Component} from 'react'
import styles from '../../css/items.module.css'
import Artwork from './Artwork'
import Title from '../StyledTitle'
export default class ArtworkList extends Component {
  state = {
		artworks:[],
		sortedArt:[]
	}

	componentDidMount() {
		this.setState({
			artworks: this.props.artworks.edges,
			sortedArt: this.props.artworks.edges
		})
	}


  render() {
    return (<section className={styles.tours}>
			<Title title='my' subtitle='art'/>
			<div className={styles.center}>
				{this.state.sortedArt.map(({node}) =><Artwork key={node.contentful_id} art={node}/>
				)}
			</div>
		</section>);
  }

}
