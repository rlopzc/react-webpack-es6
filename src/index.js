import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world
        <Child />
      </div>
    )
  }
}
class Child extends React.Component {
  render() {
    return <p>HOT LOADING</p>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
