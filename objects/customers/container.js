import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsCustomers} from './api'

const dataSchema = {
  name : 'Customers',
  description : 'cusomters schema',
  fields : {
    "firstName":{
      "type":"String",
      "header": "First Name"
    },
    "lastName":{
      "type":"String",
      "header": "Last Name"
    }
  }
}

var shallowCompare = require('react-addons-shallow-compare');

class Customers extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  viewItem(id) {
    const {dispatch, token} = this.props;
  }
  
  componentDidMount= () =>{
    const {dispatch} = this.props;
    dispatch(getMerchantsCustomers());
  }

  render() {
    let {customers} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={customers.list.length}
                schema={dataSchema}
                rows={customers.list}/>
            </Panel>
          </Col>
        </Row>
      </Page>
	  );
	}
}

function mapStateToProps(state) {
  console.log("contrainer");
  console.log(state.customers);
  return {
    user: state.user,
    app:state.app,
    customers: state.customers
  };
}

export default connect(mapStateToProps)(Customers);
