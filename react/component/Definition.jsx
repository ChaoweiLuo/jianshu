import React, { Component } from 'react';

function PureFunctionComponent() {

  return (
    <div>
      Hello PureFunctionComponent!
    </div>
  );
};

const ES5ClassComponent = React.createClass({

  render () {
    return (
      <div>
        Hello ES5ClassComponent
      </div>
    );
  }
});

class ES6ClassComponents extends Component {

  render () {
    return (
      <div>
        Hello ES6ClassComponents
      </div>
    );
  }
};

const CreateElement = React.createElement()

const VarElement = (
  <div>
    Hello OtherComponent
  </div>
)
