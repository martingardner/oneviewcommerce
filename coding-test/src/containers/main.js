import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import { initialData } from "../actions/actions";
import Table from "./table";

class Main extends React.Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log("ress", res);
      if (res.hasOwnProperty("data")) {
        this.props.dispatch(initialData(res.data));
      }
    });
  }

  render() {
    console.log("main this.props.data", this.props.data);
    let data = this.props.data;
    let mainValue = data && data.length > 0 ? <Table /> : "Loading";

    return <div>{mainValue}</div>;
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Main);
