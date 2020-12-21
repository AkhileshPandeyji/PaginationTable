import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.isError = false;
    }

    componentDidCatch(error,info){
        this.isError = true;
    }
    render() { 
        if(this.isError){
            return (<h1>{"Something went wrong!!!!"}</h1>);
        }
        else{
            return (this.props.children);
        }
    }
}
 
export default ErrorBoundary;