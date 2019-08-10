import React from 'react';

class StateComponent extends React.Component {
  state = {
    msg: 'Hello world'
  }

  componentDidCatch (err) {
    console.log('componentDidCatch', err);
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate');
  }

  componentWillMount () {
    console.log('componentDidUpdate')
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  componentWillUpdate () {
    console.log('componentWillUpdate');
  }



  render () {
    console.log('renderCount:', renderCount++);
    return (
      <div>
        <div>
          <button onClick={e => this.setState({ msg: 'new Message'})}>New Message</button>
        </div>
        {this.state.msg}
      </div>
    )
  }
}