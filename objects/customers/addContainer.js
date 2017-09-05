/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule addCustomer
 */

import React, {Component} from 'react';

export default class addNote extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      firstName: '',
	      lastName: '',
          errormessage: ''
	    };
	}

	handleFistNameChange(e) {
  	    this.setState({ firstName: e.target.value });
	}
	
	handleLastNameChange(e) {
  	    this.setState({ lastName: e.target.value });
	}

	handleCreate(e) {
 		this.props.onCreate( {firstName:this.state.firstName,lastName:this.state.lastName } );
	}

	render() {
		return (
			<section style={{marginBottom:0}}>
        <div className="panel-body m-b-none">
          <form role="form">
            <div className="form-group">
              <input type="text" className="form-control has-error" value={this.state.firstName} placeholder={'fistName'} 
                onChange={(e)=>this.handleNameChange(e)}/>
              <span className="text-muted help-block m-b-none">{this.state.errormessage}</span>
            </div>
            <div className="form-group">
              <input type="text" className="form-control has-error" value={this.state.lastName} placeholder={'lastName'}
                 onChange={(e)=>this.handleDescriptionChange(e)}/>
            </div>
            <div className="">
              <button type="button" onClick={(e)=>this.handleCreate(e)} className="btn btn-info btn-block w-pad">Create</button>
            </div>
          </form>
        </div>
      </section>
		);
	}
}
