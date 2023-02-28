import React from "react";

const Search = () => (
  <section style={{width: '100%', padding: '16px 0', background: 'LightGreen',fontSize: '16px', display: 'flex', justifyContent: 'center'}}>
    <input type="text" placeholder="query" />
    <button type="button">search</button>
  </section>
);

export default Search;
