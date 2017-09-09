/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule DataTable
 */

import React, {Component} from 'react';
import DataRow from './Row';
import {Pager} from '../../components/ui/';

export default class DataTable extends Component {
    
  headers() {
    const {schema} = this.props;
    return Object.keys(schema.fields).reverse().map((key,i) => {
      return <th key={'header-key-'+key + '-' + i} key={key}>{key}</th>; 
    })
  }

  deleteRow(id) {
    this.props.onDelete(id);
  }

  renderrows() {
    const {rows, schema} = this.props;
    const headerkeys = Object.keys(schema.fields).reverse();

    return rows.map(row => {
      return <DataRow 
        key={row._id}
        schema={schema}
        keys={headerkeys}
        onDelete={(id)=>this.deleteRow(id)}
        row={row} 
      />
    });
  }

  render() {
    const {rows, schema} = this.props;

    return (
      <section>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {this.headers()}
                <th width="20"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderrows()}
            </tbody>
          </table>
        </div>
        <footer className="pull-right">
          <Pager currentPage={0} itemsPerPage={10} totalItems={this.props.totalRows} />
        </footer>
      </section>
    ); 
  }
}
