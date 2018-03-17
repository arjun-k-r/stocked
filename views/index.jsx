'use strict';

let React = require('react');
let StockeLayout = require('./base');

class StockedHome extends React.Component {
  render() {
    return (
      <StockeLayout pageTitle='Home'>
        <h3 className='center-align'>Welcome to Stocked!</h3>
        {/** TODO actual home page */}
      </StockeLayout>
    );
  }
}

module.exports = StockedHome;
