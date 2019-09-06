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
        console.log("GIVE ME THE DATA", res);
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

  componentWillUnmount() {
    this.setState(() => {
      return { clicked: false };
    });
  }

  render() {
    let rowClassName = this.state.clicked ? "row-clicked" : "";
    return (
      <tr className={rowClassName} onClick={this.dataPosts}>
        <td className="tablerow-name">{this.props.rowdata.name}</td>
        <td className="tablerow-email">{this.props.rowdata.email}</td>
        <td className="tablerow-city">{this.props.rowdata.address.city}</td>
        <td className="tablerow-company">{this.props.rowdata.company.name}</td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TableRow);
