/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Modal
 */

var React = require('react');

var Modal = {

	show : function(modalRef) {	
		$('#'+modalRef).modal({});

		$('#'+modalRef).find('.modal-dialog').css({height:'auto', 
                              'max-height':'100%'});
	},

	hide : function(modalRef) {	
		$('#'+modalRef).modal('hide');
	},

	modalFromFactory: React.createClass({
		render: function() {
			
			let size = this.props.large ? 'modal-lg' : 'modal-md';
			if (this.props.small) {
				size = 'modal-sm'; 
			} 

			var ModalComponent = this.props.factory;
			
			return (
				<div className="modal fade" id={this.props.modalref} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div className={`modal-dialog ${size}`}>
						<div className="modal-content">
							<div className="modal-header">
                <button type="button" className="text-muted close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">{this.props.title}</h4>
            	</div>
            	<div className="modal-body">
								<ModalComponent {...this.props} />
							</div>
						</div>
					</div>
				</div>
			);
		}
	}),
}

module.exports = Modal;