import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocalReduxOutlet from '../../outlets/LocalReduxOutlet';

import DataTable from '../../components/data/DataTable';
import {Panel} from '../../components/ui/';
import {Row, Col, Page} from '../../components/ui/Layout';
import {getMerchantsProducts} from './api'

const dataSchema = {
  name : 'Products',
  description : 'products schema',
  fields : [
    { "field": "name",
      "type":"String",
      "header": "Product Name"
    },
    { "field": "currency",
      "type":"String",
      "header": "Product Price Currency"
    },
    { "field": "pricePerUnit",
      "type":"String",
      "header": "Product Price"
    }
  ]
}

var shallowCompare = require('react-addons-shallow-compare');

class Products extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  viewItem(id) {
    const {dispatch, token} = this.props;
  }
  
  componentDidMount= () =>{
    const {dispatch} = this.props;
    console.log("here");
    dispatch(getMerchantsProducts());
  }

  render() {
    let {products} = this.props;
    return (
      <Page>
        <Row>
          <Col size={12}>
            <Panel>
              <DataTable 
                pageSize={10}
                page={0}
                totalRows={products.list.length}
                schema={dataSchema}
                rows={products.list}/>
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
    products: state.products
  };
}

export default connect(mapStateToProps)(Products);
