import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <p>{this.props.renderedStory}</p>
      </div>
    );
  }
}

export default Story;