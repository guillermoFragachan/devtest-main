import React from "react";
import {Component} from "react";

class Error extends Component {

  constructor(props) {
      super(props);
      this.state = { error: null};
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
      
      })
    }
    
    render() {
      if (this.state.error) {
        return (
          <div>
            <h2>ERROR</h2>
            

            
          </div>
        );
      }
      return this.props.children;
    }  
  }

  export default Error