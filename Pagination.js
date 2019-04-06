import React, { Component } from "react";

export class Pagination extends Component {
  omitButton = <button disabled>...</button>;

  renderNumber() {
    const { current, total, adjacent } = this.props;

    const pageAdjacent = [];
    const pageArray = [];

    for (let i = current - adjacent; i <= current + adjacent; i++) {
      pageAdjacent.push(i);
    }

    // Shift first negative page number to 1
    if (pageAdjacent[0] <= 0) {
      const difference = 1 - pageAdjacent[0];
      for (let i = 0; i < current + adjacent * 2 && i <= total; i++) {
        pageAdjacent[i] += difference;
      }
    }

    // Shift last page number to total page number
    if (pageAdjacent[pageAdjacent.length - 1] > total) {
      const difference = pageAdjacent[pageAdjacent.length - 1] - total;
      for (let i = 0; i < pageAdjacent.length; i++) {
        pageAdjacent[i] -= difference;
      }
    }

    // Remove negative page number
    for (let i = 0; i < pageAdjacent.length; i++) {
      if (pageAdjacent[i] >= 1) {
        pageArray.push(pageAdjacent[i]);
      }
    }

    // Add leading page numbers
    if (pageArray[0] >= 4) {
      pageArray.unshift(0);
      pageArray.unshift(1);
    } else {
      for (let i = pageArray[0] - 1; i >= 1; i--) {
        pageArray.unshift(i);
      }
    }

    // Add ending page numbers
    if (total - pageArray[pageArray.length - 1] >= 3) {
      pageArray.push(0);
      pageArray.push(total);
    } else {
      for (let i = pageArray[pageArray.length - 1] + 1; i <= total; i++) {
        pageArray.push(i);
      }
    }

    return pageArray.map(page => <button key={page}>{page}</button>);
  }

  render() {
    return (
      <div>
        <button>Prev</button>
        {this.renderNumber()}
        <button>Next</button>
      </div>
    );
  }
}

export class PaginationMobile extends Component {
  omitButton = <button disabled>...</button>;

  renderNumber() {
    const { current, total, adjacent, max } = this.props;

    const pageAdjacent = [];
    const pageArray = [];

    for (let i = current - adjacent; i <= current + adjacent; i++) {
      pageAdjacent.push(i);
    }

    // Shift first negative page number to 1
    if (pageAdjacent[0] <= 0) {
      const difference = 1 - pageAdjacent[0];
      for (let i = 0; i < current + adjacent * 2 && i <= total; i++) {
        pageAdjacent[i] += difference;
      }
    }

    // Shift last page number to total page number
    if (pageAdjacent[pageAdjacent.length - 1] > total) {
      const difference = pageAdjacent[pageAdjacent.length - 1] - total;
      for (let i = 0; i < pageAdjacent.length; i++) {
        pageAdjacent[i] -= difference;
      }
    }

    // Remove negative page number
    for (let i = 0; i < pageAdjacent.length; i++) {
      if (pageAdjacent[i] >= 1) {
        pageArray.push(pageAdjacent[i]);
      }
    }

    // Add ending page numbers
    if (total - pageArray[pageArray.length - 1] >= 3) {
      pageArray.push(0);
      pageArray.push(total);
    } else {
      for (let i = pageArray[pageArray.length - 1] + 1; i <= total; i++) {
        pageArray.push(i);
      }
    }

    // Add leading page numbers
    if (pageArray[0] >= 4) {
      if (pageArray.length < max) {
        pageArray.unshift(0);
      }
      if (pageArray.length < max) {
        pageArray.unshift(1);
      }
    } else {
      for (let i = pageArray[0] - 1; i >= 1; i--) {
        if (pageArray.length + 1 === max) {
          pageArray.unshift(0);
          break;
        } else if (pageArray.length < max) {
          pageArray.unshift(i);
        }
      }
    }

    return pageArray.map(page => <button key={page}>{page}</button>);
  }

  render() {
    return (
      <div>
        <button>Prev</button>
        {this.renderNumber()}
        <button>Next</button>
      </div>
    );
  }
}
