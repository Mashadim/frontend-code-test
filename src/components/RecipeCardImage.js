import React, { Component } from 'react';

class RecipeCardImage extends Component {
	render() {
		const { recipeImage } = this.props;
		return (
			<div className='recipeCardImageDiv'>
				<img className='recipeCardImage img-responsive center-block'src={recipeImage} />
			</div>
		)
	}
}

export default RecipeCardImage;