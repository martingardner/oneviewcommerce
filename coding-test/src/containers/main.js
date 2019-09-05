import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { initialData } from "../actions/actions";
import Table from "./table";
import SearchRow from "./searchrow";

class Main extends React.Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      if (res.hasOwnProperty("data")) {
        this.props.dispatch(initialData(res.data));
      }
    });
  }

  render() {
    let data = this.props.data;
    let mainValue = data && data.length > 0 ? <Table /> : "Loading";

    return (
      <div>
        {mainValue}
        {this.props.searchrowposts.length > 0 && <SearchRow />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
