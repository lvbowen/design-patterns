import React, { Component } from 'react'

const BorderHoc = WrappedComponent => class extends Component {
  render() {
    return <div style={{ border: 'solid 2px red' }}>
      <WrappedComponent />
    </div>
  }
}
export default BorderHoc
