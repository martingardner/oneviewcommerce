import React from "react";
import { connect } from "react-redux";

import TableRow from "./tablerow";

class Table extends React.Component {
  state = { searchterm: "" };

  updateSearchTerm = e => {
    let term = e.target.value;
    this.setState(() => {
      return { searchterm: term };
    });
  };

  searchForNameReturn = () => {
    let newArr = [];
    this.props.data.forEach(val => {
      if (val.name.includes(this.state.searchterm)) {
        newArr.push(val);
      }
    });

    return newArr;
  };

  render() {
    let dataMap =
      this.state.searchterm.length > 0
        ? this.searchForNameReturn()
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
            {dataMap.length > 0 &&
              dataMap.map(val => {
                return <TableRow rowdata={val} key={`tablerow${val.id}`} />;
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
