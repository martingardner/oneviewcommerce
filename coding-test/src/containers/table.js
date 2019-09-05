import React from "react";
import { connect } from "react-redux";

class Table extends React.Component {
  render() {
    return <>Table</>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Table);
