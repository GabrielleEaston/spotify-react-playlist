import React, { Component } from 'react';
import './Track.css';


class Track extends Component {
  constructor(props) {
    super(props);
}

  renderAction = () => {
    if (this.props.isRemoval) {
    return <button className="Track-action" onClick={this.removeTrack}>-</button>
    } else {
      return <button className="Track-action" onClick={this.addTrack}>+</button>
  }
}
  addTrack = () => {
    this.props.onAdd(this.props.track);
  }
  
  removeTrack = () => {
    this.props.onRemove(this.props.track);
  }
  render() {
    return (
      <div className="Track">
  <div class="Track-information">
    <h3>track name</h3>
    <p>Artist| Album</p>
  </div>
 {this.renderAction()}
</div>
    )
  }
}


export default Track;