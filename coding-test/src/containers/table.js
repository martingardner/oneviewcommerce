import React from "react";
import { connect } from "react-redux";

import TableRow from "./tablerow";

class Table extends React.Component {
  state = { searchterm: "" };

  updateSearchTerm = e => {
    //console.log("updateSearchTerm", e.target.value);
    let term = e.target.value;
    this.setState(() => {
      return { searchterm: term };
    });
  };

  searchForNameReturn = () => {
    console.log("searchForNameReturn", this.props.data, this.state.searchterm);
  };

  render() {
    console.log("table", this.props.data);
    let dataMap =
      this.state.searchterm.length < 0
        ? this.searchForNameReturn
        : this.props.data;
    return (
      <>
        <div>
          Search Name
          <input
            type="text"
            value={this.state.searchterm}
            onChange={this.updateSearchTerm}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {dataMap.map(val => {
              return <TableRow rowdata={val} key={val.id} />;
            })}
          </tbody>
        </table>
      </>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Table);
