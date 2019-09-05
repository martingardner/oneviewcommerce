export function initialData(data) {
  return {
    type: "APPLY_DATA",
    data: data
  };
}

export function searchRowPosts(data) {
  return {
    type: "SEARCH_ROW_POSTS",
    data: data
  };
}
