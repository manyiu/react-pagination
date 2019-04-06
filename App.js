import React, { Component } from "react";
import "./App.css";

import { Pagination, PaginationMobile } from "./Pagination";

class App extends Component {
  render() {
    return (
      <div className="App">
        Traditional:
        <Pagination current={1} total={10} adjacent={1} />
        <Pagination current={2} total={10} adjacent={1} />
        <Pagination current={3} total={10} adjacent={1} />
        <Pagination current={4} total={10} adjacent={1} />
        <Pagination current={5} total={10} adjacent={1} />
        <Pagination current={6} total={10} adjacent={1} />
        <Pagination current={7} total={10} adjacent={1} />
        <Pagination current={8} total={10} adjacent={1} />
        <Pagination current={9} total={10} adjacent={1} />
        <Pagination current={10} total={10} adjacent={1} />
        Mobile:
        <PaginationMobile current={1} total={10} adjacent={1} max={5} />
        <PaginationMobile current={2} total={10} adjacent={1} max={5} />
        <PaginationMobile current={3} total={10} adjacent={1} max={5} />
        <PaginationMobile current={4} total={10} adjacent={1} max={5} />
        <PaginationMobile current={5} total={10} adjacent={1} max={5} />
        <PaginationMobile current={6} total={10} adjacent={1} max={5} />
        <PaginationMobile current={7} total={10} adjacent={1} max={5} />
        <PaginationMobile current={8} total={10} adjacent={1} max={5} />
        <PaginationMobile current={9} total={10} adjacent={1} max={5} />
        <PaginationMobile current={10} total={10} adjacent={1} max={5} />
      </div>
    );
  }
}

export default App;
