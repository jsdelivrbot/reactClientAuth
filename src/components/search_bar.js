import React, {Component} from 'react';

class searchBar extends Component {

    // Only class based component have state, function based not
    constructor(props) {
        super(props);

        // Initialiazing a state
        this.state = {
            term: 'Search ... '
        };
    }

    render() {
        // react.createElement return <input onChange={ event =>
        // console.log(event.target.value) }/>;
        // update the state with the 'this.setState({key of state: value to set})'
        // a controlled component has it value set by the state. so value changes when the state changes as well
        // value of input is value of state
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})}/>
            </div>
        );
    }

    onInputChange(event) {
        //  console.log(event.target.value);
    }

}

export default searchBar;