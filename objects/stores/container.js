import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsStores} from './api'

const dataSchema = {
  name : 'Stores',
  description : 'stores schema',
  fields : [
    { "field": "name",
      "type":"String",
      "header": "Store Name"
    }
  ]
}

var shallowCompare = require('react-addons-shallow-compare');

class Stores extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  viewItem(id) {
    const {dispatch, token} = this.props;
  }
  
  componentDidMount= () =>{
    const {dispatch} = this.props;
    console.log("here");
    dispatch(getMerchantsStores());
  }

  render() {
    let {stores} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={stores.list.length}
                schema={dataSchema}
                rows={stores.list}/>
            </Panel>
          </Col>
        </Row>
      </Page>
	  );
	}
}

function mapStateToProps(state) {
  return {
    user: state.user,
    app:state.app,
    stores: state.stores
  };
}

export default connect(mapStateToProps)(Stores);
