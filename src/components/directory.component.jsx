import React from 'react';
import MenuItem from "./menu-item.component.jsx";


class Directory extends React.Component{
	constructor(){
		super();
		this.state = {
			items : [{
				title : 'Jackets',
				imageUrl : 'https',
				id: 1,
			    },
			    {
				title : 'Hats',
				imageUrl : 'https',
				id: 2,
			    },
			    {
				title : 'Sneakers',
				imageUrl : 'https',
				id: 3,
			    },
			    {
				title : 'Bags',
				imageUrl : 'https',
				id: 4,
			    }]
			    }
	}

	render(){
		return(
			<div className = "directory-menu">
			{
				this.state.items.map(item =>(
				  <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} />
				  ))
			}
			</div>
		)
	}
}
export default Directory;

