import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Page extends Component {

	render(){

		return (
			<div className="page">

				<Header />

				<h1>Page: { this.props.location.pathname }</h1>

				<Footer />

			</div>
		);

	}

}
export default Page