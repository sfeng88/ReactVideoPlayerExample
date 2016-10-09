import _ from 'lodash';
// Go get React lib from node_modules and make it within scope of this file
// es6 syntax
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'NEED TO ADD';

// Create a new component. This component should produce some HTML.
// const is a es2016 syntax. const is very similar to var, you are declaring a variable with const and its never going to change
// <div>Hi!</div> is jsx. It lets us write what looks like HTML but its really JS.
// This is a component class.
// New es6 syntax using fat arrow (=>) which means the same as
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState {videos} same as this.setState({ videos: videos })
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    // Passing data from parent to children components is called passing props
    // Example: passing videos to VideoList
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={ this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos } />
      </div>
    );
  }
}

 // Take this component's generated HTML and put it on the page (in the DOM).
// Use ReactDom whenever you are trying to render something to the DOM, when you are touching the DOM directly
// React is use when you want to interact with the components
 ReactDom.render(<App />, document.querySelector('.container'));
