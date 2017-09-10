import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsEmployees} from './api'

const dataSchema = {
  name : 'Employees',
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

class Employees extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  viewItem(id) {
    const {dispatch, token} = this.props;
  }
  
  componentDidMount= () =>{
    const {dispatch} = this.props;
    dispatch(getMerchantsEmployees());
  }

  render() {
    let {employees} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={employees.list.length}
                schema={dataSchema}
                rows={employees.list}/>
            </Panel>
          </Col>
        </Row>
      </Page>
	  );
	}
}

function mapStateToProps(state) {
  console.log("contrainer");
  console.log(state.employees);
  return {
    user: state.user,
    app:state.app,
    employees: state.employees
  };
}

export default connect(mapStateToProps)(Employees);
