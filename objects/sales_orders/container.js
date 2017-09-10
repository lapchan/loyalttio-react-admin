import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsSalesOrders} from './api'

const dataSchema = {
  name : 'SalesOrders',
  description : 'sales orders schema',
  fields : [
    { "field": "price",
      "type":"String",
      "header": "Price"
    }
  ]
}

var shallowCompare = require('react-addons-shallow-compare');

class SalesOrders extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  viewItem(id) {
    const {dispatch, token} = this.props;
  }
  
  componentDidMount= () =>{
    const {dispatch} = this.props;
    dispatch(getMerchantsSalesOrders());
  }

  render() {
    let {sales_orders} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={sales_orders.list.length}
                schema={dataSchema}
                rows={sales_orders.list}/>
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
    sales_orders: state.sales_orders
  };
}

export default connect(mapStateToProps)(SalesOrders);
