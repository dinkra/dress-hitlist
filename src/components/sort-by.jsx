import React from 'react';
import ReactDOM from 'react-dom';

class SortBy extends React.Component {
	render() {
		const sortOptions = [{},{
			text: "price low to high",
			sortOn: "price",
			sortOrder: "ascending" 
		},{
			text: "price high to low",
			sortOn: "price",
			sortOrder: "descending"
		},{
			text: "popularity low to high",
			sortOn: "popularity",
			sortOrder: "ascending" 
		},{ 
			text: "popularity high to low",
			sortOn: "popularity",
			sortOrder: "descending" 
		}];
		const sortOptionsList = sortOptions.map((option, index) => 
			<option value={JSON.stringify(option)}
                  key={index} >{option.text}
            </option>
        );
		return <p className="sort-options">
			<label htmlFor="sortBy">
				<span className="sort-option-label">Sort by </span>
			</label>
			<select id="sortBy" onChange={this.props.startSorting}>
				{sortOptionsList}
			</select>
		</p>
	}
}

export default SortBy;