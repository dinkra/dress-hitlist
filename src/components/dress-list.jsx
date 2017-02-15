import React from 'react';
import classNames from 'classnames';
import DressContainer from './dress-container.jsx';
 
class DressList extends React.Component {
	render() {
		const setRating = this.props.setRating;
		const deleteHitlistLine = this.props.deleteHitlistLine;
		const dresses = this.props.dresses.map((dress, index) => 
			<DressContainer 
				setRating={setRating}
				deleteHitlistLine={deleteHitlistLine}
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