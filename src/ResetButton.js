
   import React, {Component} from 'react'

   class ResetButton extends Component{
     render(){
       return(
         <div>
          <button onClick={this.props.reset}>Reset</button>
         </div>
       );
     }
   }

   export default ResetButton;
