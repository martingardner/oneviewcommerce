import React from "react";
import { connect } from "react-redux";

class TableRow extends React.Component {
  render() {
    //console.log("tablerow", this.props.rowdata);

    return (
      <tr>
        <td>{this.props.rowdata.name}</td>
        <td>{this.props.rowdata.email}</td>
        <td>{this.props.rowdata.address.city}</td>
        <td>{this.props.rowdata.company.name}</td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TableRow);
