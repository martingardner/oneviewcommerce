import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchRowPosts } from "../actions/actions";

class TableRow extends React.Component {
  state = { clicked: false };

  dataPosts = e => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.rowdata.id}`
      )
      .then(res => {
        if (res.hasOwnProperty("data")) {
          this.props.dispatch(searchRowPosts(res.data));
          this.setState(() => {
            return { clicked: true };
          });
        }
      });
  };

  /* clear the styling on clear search results or another choice selected */
  componentDidUpdate(prevProps) {
    if (prevProps.searchrowposts !== this.props.searchrowposts) {
      this.setState(() => {
        return { clicked: false };
      });
    }
  }

  render() {
    //console.log("props hit");
    let rowClassName = this.state.clicked ? "row-clicked" : "";
    return (
      <tr className={rowClassName} onClick={this.dataPosts}>
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
