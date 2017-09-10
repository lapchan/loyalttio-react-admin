import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import DropDownButton from '../../components/ui/DropDownButton';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsCustomers} from '../customers/api'
import {getMerchantsLedgers} from '../ledgers/api'

const dataSchema = {
  name : 'Ledgers',
  description : 'ledgers schema',
  fields : [
    { "field": "name",
      "type": "String",
      "header": "Ledger Name"
    },
    { "field": "currency",
      "type":"String",
      "header": "Ledger Price Currency"
    },
    { "filed": "pricePerUnit",
      "type":"String",
      "header": "Ledger Price"
    }
  ]
}

var shallowCompare = require('react-addons-shallow-compare');

class Ledgers extends Component {
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

  onCustomerSelected(e){
    console.log(e.target.value);
    const {dispatch} = this.props;
    dispatch(getMerchantsLedgers(e.target.value));
  }

  render() {
    let {ledgers, customers} = this.props;

    function composeItems(result) {
      let viewItems = "";
      if (result){
        viewItems = result["list"].map(function(x){
          return (<option value={x._id}>{x.firstName+" "+x.lastName}</option>);
        })
      }
      return viewItems;
    }

    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>

            <div className="btn-group">
              <select name="selectCustomer" className="form-control m-b" onChange={(e)=>this.onCustomerSelected(e)}>
                <option value="" disabled="disabled" selected="selected">Select a customer</option>
                {composeItems(customers)}
              </select>
            </div> 
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={ledgers.list.length}
                schema={dataSchema}
                rows={ledgers.list}/>
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
    ledgers: state.ledgers,
    customers: state.customers
  };
}

export default connect(mapStateToProps)(Ledgers);
