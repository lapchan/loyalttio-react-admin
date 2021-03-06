/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Menu
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import MenuItem from '../components/widgets/MenuItem';
var shallowCompare = require('react-addons-shallow-compare');

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open:true
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  
  toggleShowHide() {
    this.setState({open:!this.state.open});
  }

	render() {
		var classes = "bg-white aside-md hidden-print divider-right";
        var navClasses = "nav-primary";
        if (!this.state.open) {
           classes += ' nav-xs';
           navClasses += ' hidden-xs';
        }

        const {apps, schema, blocks, selectedAppIndex, logoUrl} = this.props; 

        return (
        <aside className={classes} id="nav">
            <section className="vbox">
              <header className="header brand-light brand-header divider-bottom lock-header pos-stat clearfix">
                <a className="btn btn-link" onClick={()=>this.toggleShowHide()} data-toggle="class:nav-off-screen,open" data-target="#nav,html"> 
                  <i className="fa fa-bars"></i> 
                </a>
                <div>
                  <span className="" style={{lineHeight: '21px', fontSize:'18px', display: 'inline'}}>Tealosophy</span>
                  <img width="25" src={logoUrl} />
                </div>
              </header>
              <section className="w-f scrollable">
                <div className="slimScrollDiv">
                    <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="5px" data-color="#333333">
                    <nav className={navClasses}>
                      <ul className="nav">
                        <MenuItem link={'/'}  icon='fa-home' color='bg-danger' linkText='Overview' currentPage={this.props.currentPage}>
                        </MenuItem>          
                        <MenuItem link={'/customers'} icon='fa-users' color='bg-success' linkText='Cusomters' currentPage={this.props.currentPage}/>
                        <MenuItem link={'/products'} icon='fa-tasks' color='bg-success' linkText='Products' currentPage={this.props.currentPage}/>
                        <MenuItem link={'/stores'} icon='fa-database' color='bg-success' linkText='Stores' currentPage={this.props.currentPage}/>
                        <MenuItem link={'/employees'} icon='fa-users' color='bg-success' linkText='Employees' currentPage={this.props.currentPage}/>
                        <MenuItem link={'/sales_orders'} icon='fa-database' color='bg-success' linkText='SalesOrders' currentPage={this.props.currentPage}/>
                        <MenuItem link={'/ledgers'} icon='fa-tasks' color='bg-success' linkText='Ledgers' currentPage={this.props.currentPage}/>
                      </ul>
                    </nav>
                  </div>
                    <div className="slimScrollBar scrollBar"></div>
                    <div className="slimScrollRail scrollRail"></div>
                </div>
              </section>
        	</section>
      </aside>
		);
	}
}


class SubMenuItem extends Component {
  render() {
    var badge = this.props.badgeText ? <b className="badge bg-danger pull-right">{this.props.badgeText}</b> : null; 
    return (
     <li> <Link to={this.props.link}> <i className="fa fa-angle-right"></i> {badge}<span>{this.props.linkText}</span> </Link> </li>
    );
  }
}

