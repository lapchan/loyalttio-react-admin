/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule FullscreenModal
 */

var React = require('react');

var FullscreenModal = {

	show : function(modalRef) {	
		$('#'+modalRef).modal({});
		$('#'+modalRef).find('.modal-dialog').css({height:'100%', width:'100%', 'max-height':'100%'});
	},

	hide : function(modalRef) {	
		$('#'+modalRef).modal('hide');
	},

	modalFromFactory: React.createClass({
		render: function() {
			var ModalComponent = this.props.factory;
			return (
				<div className="modal fade in" id={this.props.modalref} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className="modal-dialog fullscreenModal">
						<div className="contentFullscreen">
							<ModalComponent {...this.props} />
						</div>
					</div>
				</div>
			);
		}
	}),
}

module.exports = FullscreenModal;