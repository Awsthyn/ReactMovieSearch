import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from "./searchMovies.js"


class Main extends React.Component {
  render() {
    return (
      <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
      </div>
    )
  }
}


ReactDOM.render(
    <Main />,
  document.getElementById('root')
);

