import React, { Component } from 'react';

import './style.scss';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          to.<strong>do</strong>
        </h1>
      </header>
    );
  }
}
