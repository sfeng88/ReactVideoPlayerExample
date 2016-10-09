// Need this because we are transferring jsx to real HTML
import React, { Component } from 'react';

// Class based component using a es6 class (an actual js object) extending React.component
// Extending means give this particular class access to everything in React.Component
// Every class based compenent needs a render method that returns some jsx
class SearchBar extends Component {
  // This is how we initialize state in a class based compenent (functional based component does not have state).
  constructor(props) {
    super(props);
    // only use this.state in the constructor
    this.state = { term: '' };
  }

  render() {
    // this.setState is how you modify the state and everytime setState is called the component is re-rendered
    // Anytime you reference js variable wrap it in {}
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
