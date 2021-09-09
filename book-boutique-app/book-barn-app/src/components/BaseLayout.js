import React, {Component} from "react";
import Menu from "./Menu";


class BaseLayout extends Component {

  
    
  
  
  render() {
  
    return (
      <>
        <Menu/>
        <div>
            {this.props.children}
        </div>
      </>
    )
  }
  
  }
  
  
  export default BaseLayout;