import React from "react";
import { connect } from "react-redux";

import { searchRowPosts } from "../actions/actions";
import SearchRows from "../components/searchrows";

export class SearchRow extends React.Component {
  clearSearchResults = () => {
    this.props.dispatch(searchRowPosts([]));
  };
  render() {
    return (
      <>
        <h2>Search Row Posts</h2>
        <div>
          <button className="clear-results" onClick={this.clearSearchResults}>
            Clear Search Results
          </button>
        </div>
        <table className="searchrow-posts">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.props.searchrowposts &&
              this.props.searchrowposts.length > 0 &&
              this.props.searchrowposts.map(val => {
                return <SearchRows data={val} key={`searchRows${val.id}`} />;
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

export default connect(mapStateToProps)(SearchRow);
