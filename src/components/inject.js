import React from 'react';

const inject = (obj = {}) => {
    return (WrappedComponent) => {
        return class extends React.Component {
            render() {
            // 可以在这里访问类组件的props
            // console.log(this.props, obj);
            
            return <WrappedComponent {...this.props} { ...obj} />;
            }
        };
    }
};

export default inject;