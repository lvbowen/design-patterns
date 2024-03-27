import React, { Component } from 'react'
import BorderHoc from './BorderHoc'
import inject from './inject'

// @BorderHoc  // 用Hoc装饰目标组件
// @inject({ a: 111 })   // 利用装饰器给类组件的 props 加属性
class TargetComponent extends React.Component {
  render() {
    console.log('props', this.props)
    return (
        <div style={{ width: 100, height: 100 }}>
            目标组件
        </div>
    )
  }
}

// export出去的其实是一个被包裹后的组件
export default BorderHoc(TargetComponent)
// export default TargetComponent
