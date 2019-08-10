//import React, { useState, useEffect, Component } from 'react';

class StateComponent extends React.Component {
  state = {
    counter: 0
  }
  doSomeThing2 = () => {
    // 正确的使用方法
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
  } 

  doSomeThing = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
    this.setState({
      counter: this.state.counter + 1
    });
  } 

  render () {
    return (
      <div>
        <div>
          <button onClick={this.doSomeThing2}>someBtn</button>
        </div>
        You click button {this.state.counter} times
      </div>
    )
  }
}

class State2Component extends React.Component {
  state = {
    name: 'Tim',
    greetings: 'Hello'
  }
  doSomeThing = () => {
    this.setState({
      greetings: 'Hi'
    });
    this.setState({
      name: 'zhangsan'
    });
  }

  doSomeThing2 = () => {
    this.setState({
      greetings: 'Hi',
      name: 'zhangsan'
    });
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={this.doSomeThing}>someBtn1</button>
          <button onClick={this.doSomeThing2}>someBtn2</button>
        </div>
        {this.state.greetings} {this.state.name}
      </div>
    )
  }
}

function PureFunctionComponent () {
  let index = 0,
    names = ['Jim', 'Tim', 'Helen'];
  let [name, setName] = useState('Tim');
  useEffect(() => {
    setTimeout(() => {
      setName(names[index++]);
    }, 1000)
  }, [name]);
  return (
    <div>
      Hello {name}
    </div>
  );
}
