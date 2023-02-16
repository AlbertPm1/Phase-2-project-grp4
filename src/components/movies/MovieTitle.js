import React from 'react';

function MovieTitle (props){
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieTitle;