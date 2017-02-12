import React from 'react';
import classNames from 'classnames';
import DressItem from './dress-item.jsx';
 
class DressList extends React.Component {
	render() {
		const dresses = this.props.dresses.map((dress, index) => 
			<DressItem dress={dress}
                  key={dress.id}
                  index={index}>
            </DressItem>
        );
		return <ul className="dress-list">
			{dresses}
		</ul>
	}
}

export default DressList;	