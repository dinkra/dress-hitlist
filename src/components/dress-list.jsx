import React from 'react';
import classNames from 'classnames';
import DressContainer from './dress-container.jsx';
 
class DressList extends React.Component {
	render() {
		const setRating = this.props.setRating;
		const dresses = this.props.dresses.map((dress, index) => 
			<DressContainer 
				setRating={setRating}
				dress={dress}
                key={dress.id}
                index={index}>
            </DressContainer>
        );
		return <ul className="dress-list row">
			{dresses}
		</ul>
	}
}

export default DressList;	