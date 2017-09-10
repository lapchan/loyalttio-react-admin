import React, {Component} from 'react';
import { Link } from 'react-router';

import Cell from './Cell';

export default class Row extends Component {

	deleteRow(e) {
    this.props.onDelete(this.props.row._id);    
  }

	render() {
		var cellStyle = {};
		const {schema, keys, row} = this.props;

		return (
			<tr>
				{schema.fields.map((obj) => {
          return <Cell
  					cellType = {obj.type}
  					value = {row[obj.field] || ''}
            schemaName = {schema.name}
				  />})
      	}
        <td>
        	<a href="javascript:;" onClick={(e)=>this.deleteRow(e)}><i className="fa text-muted fa-trash-o"></i></a>
        	<Link to={'/'+schema.name+'/'+row['_id']}><i className="fa text-muted fa-edit"></i></Link>
        </td>
      </tr>
		);
	}
}
