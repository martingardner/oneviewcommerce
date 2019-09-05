import React from "react";

const SearchRows = props => {
  console.log("props", props);
  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.body}</td>
    </tr>
  );
};

export default SearchRows;
