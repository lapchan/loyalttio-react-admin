import React, {Component} from 'react';
import DataRow from './Row';
import {Pager} from '../../components/ui/';

export default class DataTable extends Component {
    
  headers() {
    const {schema} = this.props;
    return schema.fields.map((obj) => {
      return (<th>{obj.header}</th>); 
    })
  }

  renderrows() {
    const {rows, schema} = this.props;
    return rows.map(row => {
      return <DataRow 
      key={row._id}
      schema={schema}
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
