import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderStory, clearForm } from '../actions';
import Story from './Story';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adjective: "",
      verb: "",
      adverb: ""
    };
  }
  render() {
    return (
      <div className="Form">
        <form className="storyForm" onSubmit={this.renderStorySubmit.bind(this)}>
          <label>Adjective:</label>
          <input className="inputBox" type="text" value={this.state.adjective} onChange={this.adjectiveChange.bind(this)}/>
          "ing"
          <label>Verb:</label>
          <input className="inputBox" type="text" value={this.state.verb} onChange={this.verbChange.bind(this)}/>
          <label>Adverb:</label>
          <input className="inputBox" type="text" value={this.state.adverb} onChange={this.adverbChange.bind(this)}/>
          <button className="formButton" type="submit">Read Story</button>
          <button className="formButton"onClick={this.clearFormSubmit.bind(this)}>Clear Form</button>
        </form>
        <Story renderedStory={this.props.story} />
      </div>
    );
  }

  adjectiveChange(event) {
    this.setState({
        adjective: event.target.value
    });
  }

  verbChange(event) {
    this.setState({
        verb: event.target.value
    });
  }

  adverbChange(event) {
    this.setState({
        adverb: event.target.value
    });
  }

  clearFormSubmit(event) {
    event.preventDefault();
    this.props.clearForm();
    this.setState({
      adjective: "",
      verb: "",
      adverb: ""
    });
  }

  renderStorySubmit(event) {
    event.preventDefault();
    const storyProps = {
      adjective: this.state.adjective,
      verb: this.state.verb,
      adverb: this.state.adverb
    }
    this.props.renderStory(storyProps);
  }

}

function mapStateToProps(state) {
    return {
        story: state.story,
    };
}

const mapActionsToProps = { renderStory, clearForm };

export default connect(mapStateToProps, mapActionsToProps)(Form);
