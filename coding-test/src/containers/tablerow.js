import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchRowPosts } from "../actions/actions";

class TableRow extends React.Component {
  dataPosts = e => {
    console.log("row hit", this.props.rowdata.id);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.rowdata.id}`
      )
      .then(res => {
        console.log("dataPosts", res);
        if (res.hasOwnProperty("data")) {
          this.props.dispatch(searchRowPosts(res.data));
        }
      });
  };

  render() {
    return (
      <tr onClick={this.dataPosts}>
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
