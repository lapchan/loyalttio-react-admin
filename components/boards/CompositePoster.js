/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule CompositePoster
 */

import React, { Component } from 'react';

import {Row, Col, Page} from '../ui/Layout';

const CompositePoster = ({images}) => {
  return (
    <div className="compositePoster">
		  <Row>
		  	<Col size="12">
	  			<div className="cover" style={{backgroundImage:'url(https://s-media-cache-ak0.pinimg.com/564x/25/4b/97/254b97bef2fe046e9e9845b851529088.jpg)'}}></div>
		  	</Col>
		  </Row>
		  <Row>
		  	<Col classes={'thumbholder'} size="12">
		  		<div className="thumbs" style={{backgroundImage:'url(http://mozilla.org/media/img/home/voices/promos/download-firefox/firefox-logo.d99a8d78a049.png)'}}></div>
		  		<div className="thumbs" style={{backgroundImage:'url(https://d1yzzccmb3krkj.cloudfront.net/assets/homepage-heroes/at-home-dark-14040816b386584208cea73b03768b740c1d111a194edc340f891a04b9e2b833.jpg)'}}></div>
		  		<div className="thumbs" style={{backgroundImage:'url(https://d13yacurqjgara.cloudfront.net/users/688456/screenshots/3260994/workspace_800x600_1x.jpg)'}}></div>
		  	</Col>
		  </Row>
    </div>
  )
}

export default CompositePoster;