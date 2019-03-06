import React, { Component } from "react";

export default class StoreList extends Component {
  render() {
    return (
      <article>
        <h1>Store List</h1>
        {this.props.stores.map(singleEmployee => {
          return <p key={singleEmployee.id}>{singleEmployee.name}</p>;
        })}
      </article>
    );
  }
}

