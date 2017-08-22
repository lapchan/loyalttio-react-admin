/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Login
 */

import React, {Component} from 'react';

import Input from '../ui/Input';

import skygear from 'skygear';

export default class FullScreenLogin extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      email: '',
	      password: '',
	      error:'',
	      endpoint:''
	    };
	}

	handleEndpointChange(e) {
		this.setState({ endpoint: e.target.value });
	}

	handleEmailChange(e) {
    	this.setState({ email: e.target.value });
  	}
	
	handlePassChange(e) {
    	this.setState({ password: e.target.value });
  	}

	handleLogin(e) {
		skygear.config({       
			"endPoint": this.state.endpoint,
			"apiKey": "372be38968cc483e8717cb525bf3a66a"  
		})
		.then(() => {
			console.log("skygear is ready - handleLogin: ", this.props);
			this.props.onLogin(this.state.email, this.state.password);
		})      
		.catch(error => {
			console.log("error - cannot init skygear.", this.props);
		});
	}

	componentDidMount() {
		document.body.classList.add('page--signin');
	}

	render() {
		return (
			<section className="container as-table">
				<div className="row as-table-cell as-table-cell--middle">
					<form role="form" className="col-md-10 col-md-offset-1">
						<select name="account" className="form-control m-b" onChange={(e)=>this.handleEndpointChange(e)}>
							<option>select an endpoint</option>
							<option value="http://localhost:3000/">localhost</option>
							<option value="https://loyalttio.skygeario.com/">loyaltt.io</option>
						</select>
						<div className="form-group"><Input ref="emailRef" autoComplete={'off'} format="email" icon="fa fa-user" required={true} errorMessage="Please verify your email" placeholder="email" value={this.state.email} onFieldChange={(e)=>this.handleEmailChange(e)} /></div>
						<div className="form-group"><Input ref="loginRef" autoComplete={'off'} format="password" icon="fa fa-lock" required={true} errorMessage="Password is required" placeholder="password" value={this.state.password} onFieldChange={(e)=>this.handlePassChange(e)} /></div>
						<p className="help-block">{this.props.errorMessage ? this.props.errorMessage.message : ''}</p>
						<div className="form-group">
								<button type="button" onClick={(e)=>this.handleLogin(e)} className="btn btn-info btn-block w-pad">Login</button>
						</div>
						<div className="form-group">
							<p>{this.state.error}</p>
						</div>
						<div className="text-center">
							<a href="javascript:;" onClick={()=>this.props.onForgot()} className="w-login">Forgot your password?</a>
						</div>
					</form>
				</div>
			</section>
		);
	}
}
