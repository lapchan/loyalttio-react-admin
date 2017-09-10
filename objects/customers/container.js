import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsCustomers} from './api'

import ModalFactory from '../../components/modals/factory';
import AddCustomer from './addContainer';

let Factory = ModalFactory.modalFromFactory;

const dataSchema = {
  name : 'Customers',
  description : 'cusomters schema',
  fields : [
    { "field": "firstName",
      "type":"String",
      "header": "First Name"
    },
    { "field": "lastName",
      "type":"String",
      "header": "Last Name"
    }
  ]
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

    handleNewCustomer(customer) {
      let {dispatch} = this.props;
      dispatch(addMerchantsCustomers());

      ModalFactory.hide('addCustomerModal');
    }

    newCustomerClick(e) {
        e.preventDefault();
        ModalFactory.show('addCustomerModal');
    }


  render() {
    let {customers} = this.props;
    return (
      <Page>
         <Factory modalref="addCustomerModal" title="Add Customer" factory={AddCustomer} onCreate={(customer) => this.handleNewCustomer(customer)} />
         <Row>
          <div className="pull-right w50 text-right m-r-lg">
            <button className="btn btn-dark" onClick={(e)=>this.newCustomerClick(e)}> 
              <i className="fa fa-plus-square"></i>
              <span className="btn-text">New Customer</span> 
            </button>
          </div>
        </Row>
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
  return {
    user: state.user,
    app:state.app,
    customers: state.customers
  };
}

export default connect(mapStateToProps)(Customers);
