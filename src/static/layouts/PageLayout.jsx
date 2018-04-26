PageLayout = React.createClass({

	render(){
		return(
			<div className="atlas-layout page-layout">
				<Header />
				<main>
					{this.props.content}
				</main>
				<Footer/>
			</div>
			);
		}

});
