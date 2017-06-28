/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule PhotoElement
 */

var React = require('react');

var PhotoElement = React.createClass({

	getInitialState: function() {
    return {
      myFileName: "",
      myFileHandle: {},
      currentAvatar: this.props.image,
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      myFileName: "",
      myFileHandle: {},
      currentAvatar: nextProps.image,
    });
  },

  handleChange: function(event) {
    var self = this;

    this.setState( {myFileName: event.target.files[0].name} );
    this.setState( {myFileHandle: event.target.files[0]} );

    var file = event.target.files[0];
    var name = event.target.files[0].name;
  },

  handleImageClick: function(e) {
    $("#fileInput").click();
    e.preventDefault();
  },

  render: function() {
    return (
      <div className="form-group">
        <div style={{height:0,overflow:'hidden'}}>
          <input type="file" id="fileInput" onChange={this.handleChange} name="fileInput" />
        </div>
        <div style={{width:160}} className="m-l-md m-t-sm">
          <a href="#" onClick={this.handleImageClick} className="thumbnail">
            <img src={this.state.currentAvatar} alt="Update Profile Photo" />
            <div className="imageUpdate">
              <p>{this.props.photoHelp}</p>
            </div>
          </a>
        </div>
      </div>
    )
  }
});

module.exports = PhotoElement;